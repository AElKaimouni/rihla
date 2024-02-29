import { api } from ".";
import { AxiosError } from "axios";

export default {
  getOneMatch: async (id: string) => {
    try {
      const res = await api.get("/match/" + id + "/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
  getMatches: async () => {
    try {
      const res = await api.get("/Matchs/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
};
