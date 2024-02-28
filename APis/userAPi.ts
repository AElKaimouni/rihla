import { User } from "@/types";
import { api } from ".";
import { AxiosError } from "axios";

export default {
    auth: async () => {
        try {
            const res = await api.post("/user/auth");

            return res.data as User;
        } catch(error) {
            if(error instanceof AxiosError && error.response?.status === 401) {
                return null;
            }

            throw error;
        }
    },
    login: async (email: string, password: string, remember: boolean = false) => {
        try {
            const res = await api.post("/Login/", { email, password, remember }, { headers: {
                
            } });

            return res.data as string;
        } catch(error) {
            if(error instanceof AxiosError && error.response?.status === 400) {
                return null;
            }

            throw error;
        }
    },
    register: async ( name: string, email: string, password: string ) => {
        try {
            await api.post("/register", { name, email, password });


        } catch(error) {
            if(error instanceof AxiosError && error.response?.status === 400) {
                return error.response.data as string;
            }

            throw error;
        }
    },
}