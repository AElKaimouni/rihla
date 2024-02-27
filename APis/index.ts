import axios from "axios";

export const api  = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST
});

api.interceptors.request.use((req) => {
    if(typeof window !== 'undefined')
    req.headers.Authorization = window.localStorage.getItem("auth_token");

    req.headers['Content-Type'] = "application/x-www-form-urlencoded";

    return req;
});

export { default as UserAPi } from "./userAPi";
