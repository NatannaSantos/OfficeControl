import { Transaction } from "@prisma/client";
import { notFoundError } from "../../utils/errorUtils.js";
import transactionRepository from "../repositories/transactionRepository.js";

export type CreateTransactionData = Omit<Transaction, "id">;

async function createTransaction(transactionData:CreateTransactionData){
    
   
    await transactionRepository.insert(transactionData);

}

async function findTransactions(companyId:number){
    const existingTransaction = await transactionRepository.findTransactionByCompanyId(companyId);

    if (!existingTransaction) throw notFoundError("there are no transactions for this user");

    return existingTransaction;
}

async function deleteTransaction(companyId:number,transactionId:number){
    const existingTransaction = await transactionRepository.findTransactionByCompanyId(companyId);

    if (!existingTransaction) throw notFoundError("there are no transactions for this user");

    await transactionRepository.deleteTransaction(transactionId);

}

export default {
    createTransaction,
    findTransactions,
    deleteTransaction
}