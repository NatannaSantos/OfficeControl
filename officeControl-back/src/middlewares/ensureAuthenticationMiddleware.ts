import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import companyService from "../services/companyService.js";
import { unauthorizedError } from "../../utils/errorUtils.js";
dotenv.config();

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Missing authorization header");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    const { companyId } = jwt.verify(token, process.env.JWT_SECRET) as {
      companyId: number;
    };
    const company = await companyService.findById(companyId);
    res.locals.company = company;

    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}