import { useMutation } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { RegistrationFormData } from '@/interfaces/RegistrationFormData';
import Cookie from 'js-cookie';

export const useRegister = () => {
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(
    (newUser: RegistrationFormData) => axiosInstance.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, newUser),
    {
        onSuccess: (data) => {
          Cookie.set(process.env.NEXT_PUBLIC_USER_TOKEN!, data.data.token);
          router.push("/");
        },
        onError: (error) => {
          console.error('Erro no registro:', error);
        }
    }
  );

  return { mutate, isLoading, isError, error };
};