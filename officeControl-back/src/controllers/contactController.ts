import { Request, Response } from "express";
import contactService from "../services/contactService";

async function createContact(req: Request, res:Response){
    const contacts = req.body;
    const {company} = res.locals;

    await contactService.createContact({...contacts, companyId:company.id});
    res.sendStatus(201);
}

async function findContact(req:Request, res:Response) {
    const {company} = res.locals;

    const contact = await contactService.findContact(company.id);

    return res.status(200).send(contact);
}

async function updateContact(req:Request, res:Response){
    const {id} = req.params;
    const contactId = parseInt(id);
    const contactData = req.body;
    const {company} = res.locals;

    await contactService.updateContact(company.id, contactId, contactData);
    res.sendStatus(201);
}

async function deleteContact(req:Request, res:Response){
    const {id} = req.params;
    const contactId = parseInt(id);
    const {company} = res.locals;

    await contactService.deleteContact(company.id, contactId);
    res.sendStatus(201);
}

export default{
    createContact,
    findContact,
    updateContact,
    deleteContact
}