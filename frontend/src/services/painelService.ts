import { Painel } from '@/data/types';
import api from './api';

export const getPaineis = async () => {
    const response = await api.get<Painel[]>('/paineis');
    return response.data;
};

export const createPainel = async (painel: Painel) => {
    const response = await api.post<Painel>('/paineis', painel);
    return response.data;
};

export const updatePainel = async (id: number, painel: Painel) => {
    const response = await api.put<Painel>(`/paineis/${id}`, painel);
    return response.data;
};

export const deletePainel = async (id: number) => {
    await api.delete(`/paineis/${id}`);
};
