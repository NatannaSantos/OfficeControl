import { Request, Response } from "express";
import transactionService from "../services/transactionService.js";

async function createTransaction(req:Request, res:Response){
    const transactions = req.body;
    const {company} = res.locals;

    console.log("company",company);

    await transactionService.createTransaction({...transactions,companyId:company.id});

    return res.sendStatus(201);
    
}

async function findTransactions(req:Request,res:Response) {
    const {company} = res.locals;

    const transaction = await transactionService.findTransactions(company.id);

    return res.status(200).send(transaction);
}

async function deleteTransaction(req:Request, res:Response){
    const {id} = req.params;
    const {company} = res.locals;

    await transactionService.deleteTransaction(company.id,parseInt(id));

    return res.sendStatus(201);
}

export {
    createTransaction,
    findTransactions,
    deleteTransaction
}