import { prisma } from "../database.js";
import { CreateCompanyData } from "../services/companyService.js";

async function findById(id: number) {
  return prisma.company.findUnique({
    where: {
      id,
    },
  });
}
async function findByEmail(email: string) {
  return prisma.company.findUnique({
    where: {
      email,
    },
  });
}

async function insert(createUserData: CreateCompanyData) {
  return prisma.company.create({
    data: createUserData,
  });
}

export default {
  findByEmail,
  findById,
  insert,
};