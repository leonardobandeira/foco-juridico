import useAppData from '@/data/hook/useAppData';
import { ROOT_ROUTE } from '@/lib/constants';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
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
