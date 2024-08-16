import { Painel, Indicador } from '@/data/context/types';
import api from './api';

export const getIndicadores = async () => {
    const response = await api.get('/indicador');
    return response.data;
};

export const createIndicador = async (indicador: Indicador) => {
    const response = await api.post<Indicador>('/indicador', indicador);
    return response.data;
};

export const updateIndicador = async (id: number, indicador: Indicador) => {
    const response = await api.put<Painel>(`/indicador/${id}`, indicador);
    return response.data;
};

export const deleteIndicador = async (id: number) => {
    await api.delete(`/indicador/${id}`);
};

// Tipos de metas
export const getMetas = async () => {
    const response = await api.get('/indicador/metas');
    return response.data;
};
