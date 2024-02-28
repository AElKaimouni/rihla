import { api } from ".";
import { AxiosError } from "axios";

export default {
  getPlans: async () => {
    try {
      const res = await api.get("/Plans/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
  getOnePlan: async () => {
    try {
      const res = await api.get("/Plan/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
};
