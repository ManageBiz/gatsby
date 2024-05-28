import axios, { AxiosResponse } from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
    baseURL: 'https://fake-json-api.mock.beeceptor.com', // Replace with your API base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async <T>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.get<T>(url, { params });
        return response;
    } catch (error) {
        throw error;
    }
};

export const post = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.post<T>(url, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const put = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.put<T>(url, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const del = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.delete<T>(url);
        return response;
    } catch (error) {
        throw error;
    }
};

