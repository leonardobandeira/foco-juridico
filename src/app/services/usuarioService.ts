import api from "./api";

const createAuthHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProfile = async (token: string) => {
  try {
    const response = await api.get('/usuario/profile', createAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error);
    throw error;
  }
};
