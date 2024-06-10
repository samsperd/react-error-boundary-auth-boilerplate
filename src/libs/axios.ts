import axios from 'axios';
const baseURL = import.meta.env.VITE_OGLE_BACKEND_API

console.log("axios", baseURL);


export default axios.create({ baseURL,
    headers: { 'Content-Type': 'application/json'}
});

export const axiosPrivate = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});