import { Router } from "express";
import companyController from "../controllers/companyController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { companySchema, companySchemaLogin } from "../schemas/companySchema.js";
var companyRouter = Router();
companyRouter.post("/sign-up", validateSchemaMiddleware(companySchema), companyController.signUp);
companyRouter.post("/sign-in", validateSchemaMiddleware(companySchemaLogin), companyController.signIn);
export default companyRouter;
