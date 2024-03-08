import axios from 'axios';
import Cookie from 'js-cookie';
import Router from 'next/router';

const axiosInstance = axios.create({
  baseURL: `http://localhost:80`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get(process.env.NEXT_PUBLIC_USER_TOKEN!);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        Cookie.remove(process.env.NEXT_PUBLIC_USER_TOKEN!);
        Router.push('/login');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
