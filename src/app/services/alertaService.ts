import { Alerta } from "@/data/context/types";
import api from "./api";

const createAuthHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getAlertas = async (token: string) => {
  try {
    const response = await api.get('/alerta', createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alertas:', error);
    throw error;
  }
};

export const createAlerta = async (alerta: Alerta, token: string) => {
  try {
    const response = await api.post<Alerta>('/alerta', alerta, createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao criar alerta:', error);
    throw error;
  }
};
