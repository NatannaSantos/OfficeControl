import { Router } from "express";
import companyRouter from "./companyRouter.js";

const router = Router();

router.use(companyRouter);

export default router;