import { Router, type IRouter } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import productsRouter from "./products";
import faqsRouter from "./faqs";
import jobsRouter from "./jobs";
import newsRouter from "./news";
import loansRouter from "./loans";
import contactRouter from "./contact";
import membershipRouter from "./membership";
import careersRouter from "./careers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(statsRouter);
router.use(productsRouter);
router.use(faqsRouter);
router.use(jobsRouter);
router.use(newsRouter);
router.use(loansRouter);
router.use(contactRouter);
router.use(membershipRouter);
router.use(careersRouter);

export default router;
