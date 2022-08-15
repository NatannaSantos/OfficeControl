import { Company } from "@prisma/client";
import bcrypt from "bcrypt";
import { conflictError, notFoundError, unauthorizedError } from "../../utils/errorUtils.js";
import companyRepository from "../repositories/companyRepository.js";
import jwt from "jsonwebtoken";

export type CreateCompanyData = Omit<Company, "id">;

async function signUp(createCompanyData: CreateCompanyData) {
  const existingCompany = await companyRepository.findByEmail(createCompanyData.email);
  if (existingCompany) throw conflictError("Email must be unique");

  const hashedPassword = bcrypt.hashSync(createCompanyData.password, 12);

  await companyRepository.insert({ ...createCompanyData, password: hashedPassword });
}

async function signIn(loginData: CreateCompanyData) {
  const company = await getUserOrFail(loginData);

  const token = jwt.sign({ companyId: company.id }, process.env.JWT_SECRET);

  return token;
}

async function findById(id: number) {
  const company = await companyRepository.findById(id);
  if (!company) throw notFoundError("Company not found");

  return company;
}

async function getUserOrFail(loginData: CreateCompanyData) {
  const company = await companyRepository.findByEmail(loginData.email);
  if (!company) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(loginData.password, company.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return company;
}

export default {
  signUp,
  signIn,
  findById
}