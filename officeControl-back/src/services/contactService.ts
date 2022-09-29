import { Contact } from "@prisma/client";
import { notFoundError } from "../../utils/errorUtils";
import contactRepository from "../repositories/contactRepository";

export type CreateContactData = Omit<Contact, "id">

async function createContact(contacts: CreateContactData) {
    await contactRepository.insert(contacts);
}
async function findContact(companyId: number) {
    const existingContacts = await contactRepository.findContactByCompanyId(companyId);
    if (!existingContacts) throw notFoundError("there are no contacts for this user");

    return (existingContacts);
}

async function updateContact(companyId:number, contactId: number, contactData: CreateContactData) {
    const existingContacts = await contactRepository.findContactByCompanyId(companyId);
    if (!existingContacts) throw notFoundError("there are no contacts for this user");
    await contactRepository.updateContactById(contactId, contactData);
}

async function deleteContact(companyId:number, contactId: number) {
    const existingContacts = await contactRepository.findContactByCompanyId(companyId);
    if(!existingContacts) throw notFoundError("there are no contacts for this user");
    await contactRepository.deleteContact(contactId);
}

export default {
    createContact,
    findContact,
    updateContact,
    deleteContact
}