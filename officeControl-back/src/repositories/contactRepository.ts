import { prisma } from "../database";
import { CreateContactData } from "../services/contactService";

async function insert(createContactaData: CreateContactData) {
    return prisma.contact.create({
        data: createContactaData
    });
}
async function findContactByCompanyId(companyId: number) {
    return prisma.contact.findMany({
        where: {
            companyId
        }
    })
}
async function updateContactById(contactId:number, contactData:CreateContactData) {
    return prisma.contact.update({
        where:{
            id: contactId,
        },
        data:{
           ...contactData
        }
    })
}

async function deleteContact(contactId: number) {
    return prisma.contact.delete({
        where: {
            id: contactId
        }
    })
}

export default {
    insert,
    findContactByCompanyId,
    updateContactById,
    deleteContact
}