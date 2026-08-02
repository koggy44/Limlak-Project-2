import { Router, type IRouter } from "express";
import { GetFaqsQueryParams, GetFaqsResponse } from "@workspace/api-zod";

const faqsRouter: IRouter = Router();

const ALL_FAQS = [
  // JOINING
  { id: "j1", category: "joining", question: "How do I become a member of Limlak DT Sacco?", answer: "To join, you need to: (1) Fill in the membership application form, (2) Provide a copy of your National ID and KRA PIN, and (3) Purchase a minimum of Kshs. 1,000 in shares. You can apply online through our website or visit any of our branches." },
  { id: "j2", category: "joining", question: "What are the minimum share requirements?", answer: "New members are required to purchase a minimum of Kshs. 1,000 in shares upon registration. Additional shares can be purchased at any time to increase your borrowing capacity." },
  { id: "j3", category: "joining", question: "Can anyone join Limlak DT Sacco?", answer: "Yes. While Limlak was originally founded by members from Limuru, Lari, and Kikuyu constituencies, we now welcome members from all over Kenya. Both individuals and institutions can join." },
  { id: "j4", category: "joining", question: "How long does the membership approval process take?", answer: "Once you submit all required documents, membership is typically processed within 3–5 working days. You will receive confirmation via SMS and email." },
  { id: "j5", category: "joining", question: "Can Kenyans in the diaspora join?", answer: "Absolutely. We have a dedicated Diaspora Heritage Account designed specifically for Kenyans abroad. You can join and manage your account remotely through our online platforms." },
  // LOANS
  { id: "l1", category: "loans", question: "How soon can I access a loan after joining?", answer: "Most loan products are available after 3 months of active membership. Some products like Chap Chap mobile loans may be accessible sooner once your account is active on the app." },
  { id: "l2", category: "loans", question: "What determines my loan limit?", answer: "Your loan limit is generally based on your share capital, savings balance, repayment history, and the multiplier applicable to the product. Some products allow loans up to 3–4 times your deposits." },
  { id: "l3", category: "loans", question: "What interest rate does Limlak charge on loans?", answer: "Loans are charged on a reducing balance basis, typically starting from 1% per month. The exact rate depends on the product — some products like Green Financing offer preferential rates as low as 0.9% p.m." },
  { id: "l4", category: "loans", question: "How long does loan processing take?", answer: "Most loans are processed within 1–3 working days after submission of complete documents. Emergency and mobile loans (Chap Chap) can be disbursed within minutes." },
  { id: "l5", category: "loans", question: "Can I apply for a loan online?", answer: "Yes. You can apply for most loan products online through our portal. Mobile loans via the Chap Chap app require no manual paperwork — apply and receive funds directly to your M-Pesa." },
  { id: "l6", category: "loans", question: "What happens if I miss a loan repayment?", answer: "A penalty is charged on overdue amounts. It is important to communicate with us promptly if you face challenges. We offer restructuring options to help members in genuine financial difficulty." },
  // SAVINGS
  { id: "s1", category: "savings", question: "What savings accounts does Limlak offer?", answer: "We offer a wide range of accounts including Access Transactional, Vibe Savings, Dreamville Goal Account, Chama En Wealth, Diaspora Heritage, Smart Junior, Fixed & Call Deposits, Maisha & Holiday Account, and more." },
  { id: "s2", category: "savings", question: "How are dividends calculated and paid?", answer: "Dividends are calculated based on your share capital and declared annually at the Annual General Meeting (AGM). They are credited directly to your account." },
  { id: "s3", category: "savings", question: "Are my savings safe with Limlak Sacco?", answer: "Yes. Limlak DT Sacco is licensed and regulated by SASRA (Sacco Societies Regulatory Authority) as a FOSA (Front Office Savings Activity). Member deposits are protected under Kenyan law." },
  { id: "s4", category: "savings", question: "What is the minimum balance for savings accounts?", answer: "The minimum balance varies by account type. Regular savings start from as low as Kshs. 500, while Fixed Deposits typically require a minimum of Kshs. 50,000." },
  // DIGITAL
  { id: "d1", category: "digital", question: "How do I access my account via USSD?", answer: "Dial *356# from any mobile network to access your Limlak account. You can check balances, make deposits, and apply for mobile loans." },
  { id: "d2", category: "digital", question: "What is the Limlak Chap Chap App?", answer: "The Chap Chap App is our mobile lending application available on Google Play Store. It allows members to apply for and receive instant loans, manage savings, and track repayments — all from their smartphone." },
  { id: "d3", category: "digital", question: "How do I deposit money via Paybill?", answer: "Use Paybill number 4103775 on M-Pesa. Enter your member number as the account number. Funds reflect in your account within minutes." },
  { id: "d4", category: "digital", question: "Can I deposit money into LIMLAK USSD?", answer: "Yes, you can deposit using LIMLAK USSD (*356#) or via Paybill 4103775. Multiple channels ensure you can always access your account." },
  { id: "d5", category: "digital", question: "Is online banking secure?", answer: "Yes. Our digital platforms use industry-standard encryption and security protocols. Never share your PIN or password with anyone. Contact us immediately if you suspect unauthorized access." },
];

faqsRouter.get("/faqs", async (req, res): Promise<void> => {
  const paramsParsed = GetFaqsQueryParams.safeParse(req.query);
  const category = paramsParsed.success ? paramsParsed.data.category : null;

  let faqs = ALL_FAQS;
  if (category) {
    faqs = ALL_FAQS.filter((f) => f.category === category);
  }

  res.json(GetFaqsResponse.parse(faqs));
});

export default faqsRouter;
