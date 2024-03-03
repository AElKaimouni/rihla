import { api } from ".";

interface CreateTrajectInfo {
    budget: number,
    city: string,
    time: string,
    number: number,
    objectif: string,
    depart: string;
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
            const json = ({...JSON.parse(res.data[0].json_content), plan: JSON.parse(JSON.parse(plan.data[0].json_content)), ...res.data[0]});

            const transports = JSON.parse(window.localStorage.getItem("traject_" + json.id));

            return {...json, transports};
        } catch(error) {
            throw error
        }
    },
    new: async (data: CreateTrajectInfo) => {
        try {
            const res = await api.post("/Traject/", data);
            await api.get("/Plan/");

            console.log(data);

            const trasports = await api.get("/Transport/", { params: { depart: data.depart, target: data.city } });

            window.localStorage.setItem("traject_" + res.data.id, JSON.stringify([...trasports.data.transports, ...(trasports.data.trains?.[0] ? [
                {
                    transportType: "train",
                    description: trasports.data.trains[0].description,
                    picture: "/images/oncf.png"
                }
             ] : [])]));

            return res.data;
        } catch (error) {
            throw error;
        }
    },
}