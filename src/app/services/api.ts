import { SESSION_COOKIE_NAME, ROOT_ROUTE } from '@/lib/constants';
import axios from 'axios';
import getToken from './infoCookie';

const api = axios.create({
    baseURL: 'http://localhost:3023',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = getToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = ROOT_ROUTE;
        }
        return Promise.reject(error);
    }
);

export default api;
