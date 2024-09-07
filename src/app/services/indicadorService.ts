import { Painel, Indicador } from '@/data/context/types';
import api from './api';

const createAuthHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getIndicadores = async (token: string) => {
  const response = await api.get('/indicador', createAuthHeaders(token));
  return response.data;
};

export const createIndicador = async (indicador: Indicador, token: string) => {
  const response = await api.post<Indicador>('/indicador', indicador, createAuthHeaders(token));
  return response.data;
};

export const updateIndicador = async (id: number, indicador: Indicador, token: string) => {
  const response = await api.put<Painel>(`/indicador/${id}`, indicador, createAuthHeaders(token));
  return response.data;
};

export const deleteIndicador = async (id: number, token: string) => {
  await api.delete(`/indicador/${id}`, createAuthHeaders(token));
};

export const getMetas = async (token: string) => {
  const response = await api.get('/indicador/metas', createAuthHeaders(token));
  return response.data;
};
