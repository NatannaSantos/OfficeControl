import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000/",
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

  async function transaction(transactionData,token) {
    const config=getConfig(token);
    return baseAPI.post("/transactions", transactionData,config);
  }
  
  async function getTransactions(token) {
    const config = getConfig(token);
    return baseAPI.get("/transactions", config);
  }

  async function deleteTransaction(token,id){
    const config = getConfig(token);
    return baseAPI.delete(`/transactions/${id}`,config)
  }

const api = {
    signUp,
    signIn,
    transaction,
    getTransactions,
    deleteTransaction
}

export default api;