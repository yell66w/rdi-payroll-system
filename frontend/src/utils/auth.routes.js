import axios from "./API.js";

export const users = () => axios.get(`/users`);

export const signin = (data) => axios.post(`/auth/signin`, data);
