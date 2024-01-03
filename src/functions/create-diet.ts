import axiosInstance from '@/utils/axiosInstance';
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
        // Lidar com o erro aqui, talvez exibir uma mensagem para o usuário
      },
    }
  );

  return authMutation;
}