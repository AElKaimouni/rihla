import { api } from ".";
import { AxiosError } from "axios";

export default {
  getGuides: async () => {
    try {
      const res = await api.get("/Guides/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
  getOneGuide: async (id: string) => {
    try {
      const res = await api.get("/guides/" + id + "/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
};
