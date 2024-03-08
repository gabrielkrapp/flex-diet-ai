import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export const useCreateDiet = () => {
  const router = useRouter();
  const [dietCreated, setDietCreated] = useState(null);

  const { mutate, isLoading, isError, error } = useMutation(
    (dietData: { dietType: string, foodSelections: Record<string, boolean> }) => 
      axiosInstance.post(`/creatediet`, dietData),
    {
      onSuccess: (data) => {
        setDietCreated(data.data);
        router.push({
          pathname: `/diets/${data.data.id}`,
          query: { dietDetails: JSON.stringify(data.data) },
        });
      },
    }
  );

  return { mutate, isLoading, isError, error, dietCreated };
};