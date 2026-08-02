import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db";

const contactRouter: IRouter = Router();

contactRouter.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  const [inserted] = await db
    .insert(contactSubmissionsTable)
    .values({ name, email, phone: phone ?? null, subject, message })
    .returning({ id: contactSubmissionsTable.id });

  const result = SubmitContactResponse.parse({
    success: true,
    message: "Thank you for reaching out. We will get back to you within 24 hours.",
    referenceId: `CNT-${inserted.id.toString().padStart(6, "0")}`,
  });

  res.status(201).json(result);
});

export default contactRouter;
