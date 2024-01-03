import axiosInstance from '@/utils/axiosInstance';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from "react-query";

export const useCreateDiet = () => {
  const router = useRouter();

  const authMutation = useMutation(
    () => axiosInstance.post(`${process.env.NEXT_BACKEND_URL}/creatediet`),
    {
      onSuccess: (data) => {
        const dietName = data.data.name;
        router.push(`/${dietName}`);
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 402) {
            // Abrir modal
        } else {
          // Abrir Alerta
        }
      },
    }
  );

  return authMutation;
}