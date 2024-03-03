import { api } from ".";
import { AxiosError } from "axios";

export type Guide = {
  id: number;
  name: string;
  email: string;
  ville: string;
  description: string;
  avatar: URL;
};

export default {
  getGuides: async (): Promise<Guide[]> => {
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
  getOneGuide: async (id: string): Promise<Guide> => {
    try {
      const res = await api.get("/guide/" + id + "/");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
  sendEmailToGuide: async (email: string): Promise<void> => {
    try {
      const res = await api.get("/Mail/", {
        params: {
          email,
        },
      });
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return null;
      }
      throw error;
    }
  },
};
