import { Router, type IRouter } from "express";
import { GetJobsResponse } from "@workspace/api-zod";

const jobsRouter: IRouter = Router();

jobsRouter.get("/jobs", async (_req, res): Promise<void> => {
  const jobs = GetJobsResponse.parse([
    {
      id: "job-001",
      title: "Credit Officer",
      department: "Loans & Credit",
      location: "Limuru, Kenya",
      type: "full-time",
      description: "We are looking for a dedicated Credit Officer to assess loan applications, conduct member interviews, and manage the loan portfolio. The ideal candidate will have a strong understanding of credit risk and financial analysis.",
      qualifications: [
        "Bachelor's degree in Finance, Banking, or related field",
        "Minimum 2 years experience in credit analysis or lending",
        "Knowledge of SACCO operations and regulations",
        "Excellent analytical and communication skills",
        "Proficiency in financial software and MS Office",
      ],
      deadline: "2026-08-31",
    },
    {
      id: "job-002",
      title: "ICT Officer",
      department: "Information Technology",
      location: "Limuru, Kenya",
      type: "full-time",
      description: "Join our growing technology team to maintain and improve our digital banking systems, Chap Chap mobile app infrastructure, and internal IT systems. You will collaborate with vendors and ensure high availability of our platforms.",
      qualifications: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "Experience with mobile application backends and APIs",
        "Knowledge of database management (SQL/PostgreSQL)",
        "Experience with fintech or banking systems is an advantage",
        "Strong problem-solving skills",
      ],
      deadline: "2026-09-15",
    },
    {
      id: "job-003",
      title: "Customer Service Representative",
      department: "Member Services",
      location: "Nairobi Branch, Kenya",
      type: "full-time",
      description: "Be the first point of contact for our members — providing exceptional service, resolving inquiries, and promoting Sacco products. You will help members navigate their financial journey with Limlak.",
      qualifications: [
        "Diploma or degree in Business Administration, Finance, or related field",
        "At least 1 year experience in customer service or banking",
        "Excellent communication and interpersonal skills",
        "Fluency in English and Swahili",
        "Strong attention to detail",
      ],
      deadline: "2026-08-20",
    },
    {
      id: "job-004",
      title: "Finance & Accounts Intern",
      department: "Finance",
      location: "Limuru, Kenya",
      type: "internship",
      description: "A 6-month internship opportunity for finance students and recent graduates to gain hands-on experience in Sacco financial management, reporting, and compliance in a regulated environment.",
      qualifications: [
        "Currently pursuing or recently completed a degree/diploma in Finance, Accounting, or CPA",
        "Basic knowledge of accounting principles",
        "Proficiency in MS Excel",
        "Eagerness to learn and attention to detail",
      ],
      deadline: "2026-08-10",
    },
  ]);

  res.json(jobs);
});

export default jobsRouter;
