import api from "./api";

export const getProfile = async () => {
  try {
    const response = await api.get('/usuario/profile');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alertas:', error);
    throw error;
  }
};

/* 
export const creatAlerta = async (alerta: Alerta) => {
  try {
    const response = await api.post<Alerta>('/alerta', alerta);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar alerta:', error);
    throw error;
  }
}; */