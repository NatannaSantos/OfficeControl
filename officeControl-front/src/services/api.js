import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://officecontrol.herokuapp.com",
});

function getConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(signUpData) {
  await baseAPI.post("/sign-up", signUpData);
}

async function signIn(signInData) {
  return baseAPI.post("/sign-in", signInData);
}

async function transaction(transactionData, token) {
  const config = getConfig(token);
  return baseAPI.post("/transactions", transactionData, config);
}

async function getTransactions(token) {
  const config = getConfig(token);
  return baseAPI.get("/transactions", config);
}

async function deleteTransaction(token, id) {
  const config = getConfig(token);
  return baseAPI.delete(`/transactions/${id}`, config)
}
async function createContact(contactData, token) {
  const config = getConfig(token);
  return baseAPI.post("/contacts", contactData, config);
}

async function getContacts(token) {
  const config = getConfig(token);
  return baseAPI.get("/contacts", config);
}
async function updateContact(token, id) {
  const config = getConfig(token);
  return baseAPI.put(`/contacts/contact/${id}`, config)
}

async function deleteContact(token, id) {
  const config = getConfig(token);
  return baseAPI.delete(`/contacts/contact/${id}`, config)
}

const api = {
  signUp,
  signIn,
  transaction,
  getTransactions,
  deleteTransaction,
  createContact,
  getContacts,
  updateContact,
  deleteContact
}

export default api;