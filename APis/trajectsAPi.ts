import { api } from ".";

interface CreateTrajectInfo {
    budget: number,
    city: string,
    time: string,
    number: number,
    objectif: string
}

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
            const res = await api.get("/OneTraject" , { params: { id } });
            const plan = await api.get("/PlanTraject/" , { params: { trajectId: res.data[0].id } });

            return ({...JSON.parse(res.data[0].json_content), plan: JSON.parse(JSON.parse(plan.data[0].json_content)), ...res.data[0]});
        } catch(error) {
            throw error
        }
    },
    new: async (data: CreateTrajectInfo) => {
        try {
            const res = await api.post("/Traject/", data);
            await api.get("/Plan/");

            return res.data;
        } catch (error) {
            throw error;
        }
    },
    
}