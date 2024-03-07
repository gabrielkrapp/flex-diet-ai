import axios from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookie.get(process.env.NEXT_PUBLIC_USER_TOKEN!);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;