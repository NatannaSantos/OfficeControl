import Joi from "joi";
import { CreateCompanyData } from "../services/companyService.js";

export const companySchema = Joi.object<CreateCompanyData>({
  companyName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

type CompanyDataLogin = Omit<CreateCompanyData,"companyName">

export const companySchemaLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})