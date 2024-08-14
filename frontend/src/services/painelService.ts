import { Painel } from "@/data/context/types";
import api from "./api";

export const getPaineis = async () => {
  try {
    const response = await api.get('/painel');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar paineis:', error);
    throw error;
  }
};

export const createPainel = async (painel: Painel) => {
  try {
    const response = await api.post<Painel>('/painel', painel);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar painel:', error);
    throw error;
  }
};

export const updatePainel = async (id: number, painel: Painel) => {
  try {
    const response = await api.put<Painel>(`/painel/${id}`, painel);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar painel:', error);
    throw error;
  }
};

export const deletePainel = async (id: number) => {
  try {
    await api.delete(`/painel/${id}`);
  } catch (error) {
    console.error('Erro ao deletar painel:', error);
    throw error;
  }
};

export const getIndicadoresDoPainel = async (id: number) => {
  const response = await api.get(`/painel/${id}/indicadores`);
  return response.data;
};