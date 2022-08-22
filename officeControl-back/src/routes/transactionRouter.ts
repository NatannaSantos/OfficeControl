import { Router } from "express";
import {createTransaction, deleteTransaction, findTransactions} from "../controllers/transactionController.js"
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import transactionSchema from "../schemas/transactionSchema.js";

const transactionRouter=Router();

transactionRouter.post("/transactions",validateSchemaMiddleware(transactionSchema),ensureAuthenticatedMiddleware,createTransaction);
transactionRouter.get("/transactions",ensureAuthenticatedMiddleware,findTransactions);
transactionRouter.delete("/transactions/:id",ensureAuthenticatedMiddleware,deleteTransaction);

export default transactionRouter;
