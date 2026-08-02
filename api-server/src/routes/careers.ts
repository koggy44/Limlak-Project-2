import { Router, type IRouter } from "express";
import { ApplyCareerBody, ApplyCareerResponse } from "@workspace/api-zod";
import { db } from "@workspace/db";
import { careerApplicationsTable } from "@workspace/db";

const careersRouter: IRouter = Router();

careersRouter.post("/careers/apply", async (req, res): Promise<void> => {
  const parsed = ApplyCareerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const data = parsed.data;

  const [inserted] = await db
    .insert(careerApplicationsTable)
    .values({
      jobId: data.jobId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      coverLetter: data.coverLetter ?? null,
      linkedinUrl: data.linkedinUrl ?? null,
      yearsOfExperience: data.yearsOfExperience,
    })
    .returning({ id: careerApplicationsTable.id });

  const result = ApplyCareerResponse.parse({
    success: true,
    message: "Thank you for your application. We will review your submission and be in touch if you are shortlisted.",
    referenceId: `CAR-${inserted.id.toString().padStart(6, "0")}`,
  });

  res.status(201).json(result);
});

export default careersRouter;
