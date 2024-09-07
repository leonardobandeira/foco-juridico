import { Painel } from "@/data/context/types";
import api from "./api";

const createAuthHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getPaineis = async (token: string) => {
  try {
    const response = await api.get('/painel', createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar paineis:', error);
    throw error;
  }
};

export const createPainel = async (painel: Painel, token: string) => {
  try {
    const response = await api.post<Painel>('/painel', painel, createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao criar painel:', error);
    throw error;
  }
};

export const updatePainel = async (id: number, painel: Painel, token: string) => {
  try {
    const response = await api.put<Painel>(`/painel/${id}`, painel, createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar painel:', error);
    throw error;
  }
};

export const deletePainel = async (id: number, token: string) => {
  try {
    await api.delete(`/painel/${id}`, createAuthHeaders(token));
  } catch (error) {
    console.error('Erro ao deletar painel:', error);
    throw error;
  }
};

export const getIndicadoresDoPainel = async (id: number, token: string) => {
  try {
    const response = await api.get(`/painel/${id}/indicadores`, createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar indicadores do painel:', error);
    throw error;
  }
};
