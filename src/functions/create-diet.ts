import axios from "axios";
import router from "next/router";
import { useMutation } from "react-query";

export const createDiet = async () => {
    const authMutation = useMutation(
        () => {
          return axios.post(`${process.env.NEXT_BACKEND_URL}/creatediet`);
        },
        {
          onSuccess: (data) => {
            router.push("/");
          },
          onError: () => {
          },
        }
    );

    return authMutation.mutate();
}