import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const careerApplicationsTable = pgTable("career_applications", {
  id: serial("id").primaryKey(),
  jobId: text("job_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  coverLetter: text("cover_letter"),
  linkedinUrl: text("linkedin_url"),
  yearsOfExperience: integer("years_of_experience").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCareerApplicationSchema = createInsertSchema(careerApplicationsTable).omit({ id: true, status: true, createdAt: true });
export type InsertCareerApplication = z.infer<typeof insertCareerApplicationSchema>;
export type CareerApplication = typeof careerApplicationsTable.$inferSelect;
