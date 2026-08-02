import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const membershipApplicationsTable = pgTable("membership_applications", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  nationalId: text("national_id").notNull(),
  kraPin: text("kra_pin").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  occupation: text("occupation").notNull(),
  employer: text("employer"),
  nextOfKinName: text("next_of_kin_name").notNull(),
  nextOfKinPhone: text("next_of_kin_phone").notNull(),
  nextOfKinRelationship: text("next_of_kin_relationship").notNull(),
  desiredSavingsPlan: text("desired_savings_plan").notNull(),
  preferredBranch: text("preferred_branch"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertMembershipSchema = createInsertSchema(membershipApplicationsTable).omit({ id: true, status: true, createdAt: true });
export type InsertMembership = z.infer<typeof insertMembershipSchema>;
export type MembershipApplication = typeof membershipApplicationsTable.$inferSelect;
