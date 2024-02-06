import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useCreateDiet = () => {
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(
    (dietData: { dietType: string, foodSelections: Record<string, boolean> }) => 
      axiosInstance.post(`${process.env.NEXT_BACKEND_URL}/creatediet`, dietData),
    {
      onSuccess: (data) => {
        const dietId = data.data.id;
        router.push(`/${dietId}`);
      },
    }
  );

  return { mutate, isLoading, isError, error };
};