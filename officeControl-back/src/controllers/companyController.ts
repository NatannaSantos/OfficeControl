import { Request, Response } from "express";
import userService from "../services/companyService.js";

async function signUp(req: Request, res: Response) {
  const user = req.body;

  await userService.signUp(user);

  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const company = req.body;

  const token = await userService.signIn(company);

  res.send({ token });
}

export default {
    signUp,
    signIn
}