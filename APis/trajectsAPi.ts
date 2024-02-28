import { api } from "."

export default {
    all: async () => {
        try {
            const res = await api.get("/Trajects/");

            return res.data;
        } catch(error) {
            throw error
        }
    },
    traject: async (id: number) => {
        try {
            const res = await api.get("/Traject/");

            return res.data;
        } catch(error) {
            throw error
        }
    }
}