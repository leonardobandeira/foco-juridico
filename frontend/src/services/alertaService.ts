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

export const creatAlerta = async (painel: Painel) => {
  try {
    const response = await api.post<Painel>('/alerta', painel);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar painel:', error);
    throw error;
  }
};