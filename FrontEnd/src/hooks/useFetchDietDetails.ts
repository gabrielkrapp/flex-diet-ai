import { useQuery } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';

export const useFetchDietDetails = (dietId: any) => {
  return useQuery(['dietDetails', dietId], async () => {
    const { data } = await axiosInstance.get(`/getDiet/${dietId}`);
    return data;
  }, {
    enabled: !!dietId,
  });
};