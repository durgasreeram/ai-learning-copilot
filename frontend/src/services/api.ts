import axios from 'axios';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, LOCAL_STORAGE_KEYS } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request Interceptor: Attach Auth Token if exists
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle centralized error logging or token refresh
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Standard error formatting
    const customError = {
      message: error.message || 'An unexpected error occurred.',
      status: error.response?.status,
      data: error.response?.data,
    };
    
    // In production, we'd log this or redirect on 401
    if (customError.status === 401) {
      console.warn('Unauthorized access - redirecting or clearing session');
      // e.g., localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    }
    
    return Promise.reject(customError);
  }
);

export default api;
