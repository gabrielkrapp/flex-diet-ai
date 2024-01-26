import { useMutation } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';
import { useRouter } from 'next/router';

export const useCreateDiet = () => {
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(
    (dietOptions: string) => axiosInstance.post(`${process.env.NEXT_BACKEND_URL}/creatediet`, dietOptions),
    {
        onSuccess: (data) => {
          const dietName = data.data.name;
          router.push(`/${dietName}`);
        },
    }
  );

  return { mutate, isLoading, isError, error };
};