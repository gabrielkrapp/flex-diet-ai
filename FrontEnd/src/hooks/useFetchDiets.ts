import { useQuery } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';

export const useFetchDiets = () => {
  return useQuery('diets', async () => {
    const { data } = await axiosInstance.get(`/getdiets`);
    return data;
  });
};