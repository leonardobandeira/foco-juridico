import { Alerta } from "@/data/context/types";
import api from "./api";

export const getAlertas = async () => {
  try {
    const response = await api.get('/alerta');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar paineis:', error);
    throw error;
  }
};

export const creatAlerta = async (alerta: Alerta) => {
  try {
    const response = await api.post<Alerta>('/alerta', alerta);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar alerta:', error);
    throw error;
  }
};