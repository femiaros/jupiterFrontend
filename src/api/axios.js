import axios from "axios";
const BASE_URL = 'https://jupiteracademyapi.herokuapp.com/';

export default axios.create({
    baseURL: BASE_URL
});

// Axios instance attached with inseptors to send refresh token to api for b-END protected routes || also refresh access token if expired
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});