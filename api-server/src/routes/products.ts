import { Router, type IRouter } from "express";
import { GetProductsQueryParams, GetProductsResponse, GetFeaturedProductsResponse } from "@workspace/api-zod";

const productsRouter: IRouter = Router();

const ALL_PRODUCTS = [
  // LOANS
  { id: "business-loan", category: "loans", name: "Business Loans", description: "Finance your business growth with competitive rates tailored for SMEs and entrepreneurs.", minAmount: 50000, maxAmount: 5000000, interestRate: "1% p.m reducing balance", repaymentPeriod: "Up to 48 months", eligibility: "Active member for at least 3 months with shares", featured: true, icon: "briefcase" },
  { id: "msingi-loan", category: "loans", name: "Msingi Development Loans", description: "Build your foundation — housing, renovation, land purchase, and development projects.", minAmount: 100000, maxAmount: 8000000, interestRate: "1.1% p.m reducing balance", repaymentPeriod: "Up to 60 months", eligibility: "Active member for at least 6 months", featured: true, icon: "building" },
  { id: "wakulima-loan", category: "loans", name: "Wakulima Loans", description: "Specialized financing for farmers — inputs, equipment, irrigation, and agri-business.", minAmount: 20000, maxAmount: 2000000, interestRate: "1% p.m reducing balance", repaymentPeriod: "Up to 36 months", eligibility: "Active member engaged in farming", featured: true, icon: "leaf" },
  { id: "asset-loan", category: "loans", name: "Asset Loans", description: "Purchase vehicles, machinery, equipment, and other productive assets with ease.", minAmount: 100000, maxAmount: 10000000, interestRate: "1.2% p.m reducing balance", repaymentPeriod: "Up to 60 months", eligibility: "Active member for at least 6 months", featured: false, icon: "truck" },
  { id: "fanikisha-loan", category: "loans", name: "Fanikisha Loans", description: "A flexible multi-purpose loan to help you achieve your goals — education, emergencies, and more.", minAmount: 10000, maxAmount: 1000000, interestRate: "1% p.m reducing balance", repaymentPeriod: "Up to 24 months", eligibility: "Active member", featured: false, icon: "star" },
  { id: "school-fees-loan", category: "loans", name: "School Fees Loans", description: "Ensure your children's education is uninterrupted with our quick-disbursement school fees product.", minAmount: 5000, maxAmount: 500000, interestRate: "1% p.m reducing balance", repaymentPeriod: "Up to 12 months", eligibility: "Active member with school-going dependents", featured: false, icon: "graduation-cap" },
  { id: "refinancing-loan", category: "loans", name: "Refinancing (Top-Up) Loans", description: "Access additional funds on top of an existing loan, or consolidate multiple obligations.", minAmount: 50000, maxAmount: null, interestRate: "1% p.m reducing balance", repaymentPeriod: "Varies", eligibility: "Member with existing loan in good standing", featured: false, icon: "refresh-cw" },
  { id: "tatua-loan", category: "loans", name: "Tatua Bizna Financing", description: "Specialized business rescue and turnaround financing for SMEs facing cash-flow challenges.", minAmount: 100000, maxAmount: 3000000, interestRate: "1.2% p.m reducing balance", repaymentPeriod: "Up to 36 months", eligibility: "Active business-owner member", featured: false, icon: "trending-up" },
  { id: "lpo-loan", category: "loans", name: "LPO/LSO/Contract Financing", description: "Finance Local Purchase Orders, Local Service Orders, and government/private contracts.", minAmount: 50000, maxAmount: null, interestRate: "1.5% p.m reducing balance", repaymentPeriod: "Up to contract period", eligibility: "Active member with valid LPO/contract", featured: false, icon: "file-text" },
  { id: "checkoff-loan", category: "loans", name: "Check-Off Loans", description: "Salary-backed loans repaid directly through payroll deduction for salaried employees.", minAmount: 10000, maxAmount: 3000000, interestRate: "1% p.m reducing balance", repaymentPeriod: "Up to 48 months", eligibility: "Salaried member with employer check-off arrangement", featured: false, icon: "check-square" },
  { id: "green-loan", category: "loans", name: "Green Financing", description: "Fund solar panels, biogas, water harvesting, and other green/renewable energy projects.", minAmount: 30000, maxAmount: 1500000, interestRate: "0.9% p.m reducing balance", repaymentPeriod: "Up to 48 months", eligibility: "Active member with verified green project", featured: false, icon: "sun" },
  // SAVINGS
  { id: "access-account", category: "savings", name: "Access Transactional Account", description: "A flexible account for day-to-day transactions and savings with easy access via mobile and USSD.", minAmount: 1000, maxAmount: null, interestRate: "Competitive rates", repaymentPeriod: null, eligibility: "Open to all members", featured: true, icon: "credit-card" },
  { id: "lsd-account", category: "savings", name: "Loan Security Deposit (LSD)", description: "Mandatory savings that secure your loan eligibility and earn dividends.", minAmount: 1000, maxAmount: null, interestRate: "Annual dividend", repaymentPeriod: null, eligibility: "All members", featured: false, icon: "shield" },
  { id: "vibe-account", category: "savings", name: "Vibe Savings Account", description: "A goal-oriented savings account for personal milestones — weddings, travel, purchases.", minAmount: 500, maxAmount: null, interestRate: "Competitive rates", repaymentPeriod: null, eligibility: "Open to all members", featured: false, icon: "heart" },
  { id: "chama-account", category: "savings", name: "Chama En Wealth Account", description: "Group savings account for Chamas, investment clubs, and self-help groups.", minAmount: 5000, maxAmount: null, interestRate: "Competitive rates", repaymentPeriod: null, eligibility: "Registered group/Chama", featured: false, icon: "users" },
  { id: "dreamville-account", category: "savings", name: "Dreamville Goal Account", description: "Lock your savings towards a specific goal — house deposit, school fees, or dream purchase.", minAmount: 1000, maxAmount: null, interestRate: "Higher than regular savings", repaymentPeriod: null, eligibility: "Open to all members", featured: true, icon: "target" },
  { id: "diaspora-account", category: "savings", name: "Diaspora Heritage Account", description: "Tailored for Kenyans in the diaspora to save, invest, and build wealth back home.", minAmount: null, maxAmount: null, interestRate: "Competitive USD/KES rates", repaymentPeriod: null, eligibility: "Kenyans abroad", featured: false, icon: "globe" },
  { id: "institutional-account", category: "savings", name: "Institutional Account", description: "For corporates, NGOs, and institutions seeking a trusted partner for their savings.", minAmount: 50000, maxAmount: null, interestRate: "Negotiable institutional rates", repaymentPeriod: null, eligibility: "Registered institutions", featured: false, icon: "building-2" },
  { id: "smart-junior-account", category: "savings", name: "Smart Junior Account", description: "Save for your child's future from day one — education fund with compound interest.", minAmount: 200, maxAmount: null, interestRate: "Competitive rates", repaymentPeriod: null, eligibility: "Parents/guardians of minors", featured: false, icon: "baby" },
  { id: "fixed-deposit", category: "savings", name: "Fixed & Call Deposits", description: "Lock in your funds for guaranteed, higher returns over a defined period.", minAmount: 50000, maxAmount: null, interestRate: "Up to 12% p.a.", repaymentPeriod: "1 to 12 months", eligibility: "Open to all members", featured: false, icon: "lock" },
  { id: "maisha-account", category: "savings", name: "Maisha & Holiday Account", description: "Save for life's celebrations — Christmas, Eid, summer holidays, and seasonal expenses.", minAmount: 500, maxAmount: null, interestRate: "Competitive rates", repaymentPeriod: null, eligibility: "Open to all members", featured: false, icon: "calendar" },
  // MOBILE
  { id: "chap-chap-daily", category: "mobile", name: "Chap Chap Daily", description: "Instant micro-loans repaid within 24 hours — for small, urgent daily needs.", minAmount: 500, maxAmount: 5000, interestRate: "Small daily fee", repaymentPeriod: "24 hours", eligibility: "Active Chap Chap app user", featured: true, icon: "zap" },
  { id: "chap-chap-weekly", category: "mobile", name: "Chap Chap Weekly", description: "Mobile loan disbursed instantly, repaid within 7 days. Perfect for weekly business needs.", minAmount: 1000, maxAmount: 20000, interestRate: "Competitive weekly rate", repaymentPeriod: "7 days", eligibility: "Active Chap Chap app user", featured: false, icon: "smartphone" },
  { id: "chap-chap-monthly", category: "mobile", name: "Chap Chap Monthly", description: "Larger mobile loan repaid monthly — apply on the app in under 2 minutes.", minAmount: 5000, maxAmount: 100000, interestRate: "1% p.m", repaymentPeriod: "1 month", eligibility: "Active member + Chap Chap app", featured: false, icon: "smartphone" },
  { id: "chap-chap-3month", category: "mobile", name: "Chap Chap 3 Monthly", description: "Mobile loan with 3-month repayment window for medium-term mobile financing needs.", minAmount: 10000, maxAmount: 200000, interestRate: "1% p.m reducing balance", repaymentPeriod: "3 months", eligibility: "Active member + Chap Chap app", featured: false, icon: "smartphone" },
];

productsRouter.get("/products", async (req, res): Promise<void> => {
  const paramsParsed = GetProductsQueryParams.safeParse(req.query);
  const category = paramsParsed.success ? paramsParsed.data.category : null;

  let products = ALL_PRODUCTS;
  if (category) {
    products = ALL_PRODUCTS.filter((p) => p.category === category);
  }

  res.json(GetProductsResponse.parse(products));
});

productsRouter.get("/products/featured", async (_req, res): Promise<void> => {
  const featured = ALL_PRODUCTS.filter((p) => p.featured).slice(0, 6);
  res.json(GetFeaturedProductsResponse.parse(featured));
});

export default productsRouter;
