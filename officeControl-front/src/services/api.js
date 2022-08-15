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

  // async function getCategories(token: string) {
  //   const config = getConfig(token);
  //   return baseAPI.get<{ categories: Category[] }>("/categories", config);
  // }

const api = {
    signUp,
    signIn
}

export default api;