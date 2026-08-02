import { Router, type IRouter } from "express";
import { ApplyMembershipBody, ApplyMembershipResponse } from "@workspace/api-zod";
import { db } from "@workspace/db";
import { membershipApplicationsTable } from "@workspace/db";

const membershipRouter: IRouter = Router();

membershipRouter.post("/membership/apply", async (req, res): Promise<void> => {
  const parsed = ApplyMembershipBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const data = parsed.data;

  const [inserted] = await db
    .insert(membershipApplicationsTable)
    .values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      nationalId: data.nationalId,
      kraPin: data.kraPin,
      dateOfBirth: data.dateOfBirth,
      occupation: data.occupation,
      employer: data.employer ?? null,
      nextOfKinName: data.nextOfKinName,
      nextOfKinPhone: data.nextOfKinPhone,
      nextOfKinRelationship: data.nextOfKinRelationship,
      desiredSavingsPlan: data.desiredSavingsPlan,
      preferredBranch: data.preferredBranch ?? null,
    })
    .returning({ id: membershipApplicationsTable.id });

  const result = ApplyMembershipResponse.parse({
    success: true,
    message: "Your membership application has been received. Our team will review it and contact you within 3–5 working days.",
    referenceId: `MBR-${inserted.id.toString().padStart(6, "0")}`,
  });

  res.status(201).json(result);
});

export default membershipRouter;
