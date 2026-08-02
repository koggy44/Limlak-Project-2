import { Router, type IRouter } from "express";
import { GetSaccoStatsResponse } from "@workspace/api-zod";

const statsRouter: IRouter = Router();

statsRouter.get("/stats", async (_req, res): Promise<void> => {
  const stats = GetSaccoStatsResponse.parse({
    membersCount: 15000,
    totalAssetsKes: 2500000000,
    yearsOfOperation: 22,
    branchesCount: 5,
    loansDisbursedKes: 1800000000,
  });
  res.json(stats);
});

export default statsRouter;
