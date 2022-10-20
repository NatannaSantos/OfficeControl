import { Router } from "express";
import companyRouter from "./companyRouter.js";
import transactionRouter from "./transactionRouter.js";
var router = Router();
router.use(companyRouter);
router.use(transactionRouter);
export default router;
