import axios from './API.js';

export const getAllEmployees = () => axios.get(`/employees`);
export const getOneEmployee = (id) => axios.get(`/employees/${id}`);
