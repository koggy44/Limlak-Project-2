import { Router, type IRouter } from "express";
import { GetNewsResponse } from "@workspace/api-zod";

const newsRouter: IRouter = Router();

newsRouter.get("/news", async (_req, res): Promise<void> => {
  const news = GetNewsResponse.parse([
    {
      id: "news-001",
      title: "Limlak DT Sacco Achieves FOSA License from SASRA",
      summary: "We are proud to announce that Limlak DT Sacco has been officially licensed by SASRA (Sacco Societies Regulatory Authority) to operate as a FOSA — Front Office Savings Activity. This milestone strengthens our commitment to providing regulated, secure financial services.",
      date: "2026-05-15",
      category: "Milestone",
    },
    {
      id: "news-002",
      title: "Ushirika Day 2026: Limlak Scoops Best Performing Sacco Award",
      summary: "For the fifth consecutive year, Limlak DT Sacco has been recognized at the annual Ushirika Day celebrations. We thank our members whose trust and loyalty make these achievements possible.",
      date: "2026-06-20",
      category: "Award",
    },
    {
      id: "news-003",
      title: "World Bank NAVCDP Partnership: Financing Kenya's Farmers",
      summary: "Limlak DT Sacco has signed a Memorandum of Understanding with the World Bank and county governments to finance farmers under the National Agricultural Value Chains Development Program. Up to Kshs 500M will be disbursed to qualifying Wakulima members.",
      date: "2026-04-10",
      category: "Partnership",
    },
    {
      id: "news-004",
      title: "Chap Chap App Now Available on Google Play Store",
      summary: "Our revamped Chap Chap mobile lending app is now live on Google Play Store. Enjoy instant mobile loans, balance checks, and account management from your smartphone — anytime, anywhere.",
      date: "2026-03-01",
      category: "Product",
    },
    {
      id: "news-005",
      title: "AGM 2026: Dividends Declared for All Members",
      summary: "At our Annual General Meeting held in February, the Board declared a competitive dividend rate for all members. Funds have been credited to member accounts. We thank you for your continued savings and investment in Limlak.",
      date: "2026-02-25",
      category: "AGM",
    },
  ]);

  res.json(news);
});

export default newsRouter;
