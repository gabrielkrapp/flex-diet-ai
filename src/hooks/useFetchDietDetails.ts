import { useQuery } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';

export const useFetchDietDetails = (dietId: any) => {
  return useQuery(['dietDetails', dietId], async () => {
    const { data } = await axiosInstance.get(`${process.env.NEXT_BACKEND_URL}/diets/${dietId}`);
    return data;
  }, {
    enabled: !!dietId,
  });
};