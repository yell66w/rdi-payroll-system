import axios from './API.js';

export const employees = () => axios.get(`/employees`);
export const employee = (id) => axios.get(`/employees/${id}`);
