import { prisma } from "../database.js";
import { CreateTransactionData } from "../services/transactionService.js";

async function insert(createTransactionData: CreateTransactionData) {
  console.log("createTransactionData",createTransactionData);
    return prisma.transaction.create({
      data: createTransactionData
    });
  }
async function findTransactionByCompanyId(companyId:number) {
  return prisma.transaction.findMany({
    where:{
        companyId
    }
})
}

async function deleteTransaction(transactionId:number){
  return prisma.transaction.delete({
    where:{
       id:transactionId
    }
  })
}

export default {
    insert,
    findTransactionByCompanyId,
    deleteTransaction
}