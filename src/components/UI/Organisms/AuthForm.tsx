import React, { useState, useCallback } from "react";
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthFormFields } from "../Molecules/AuthFormFields";
import { AuthButton } from "../Atoms/AuthButton";
import { validateAuthFormField } from "@/utils/validateAuthForm/validateAuthFormField";
import Cookie from 'js-cookie';
import { FormErrorMessages } from "../Molecules/FormErrorMessages";

export const AuthForm: React.FC<FormProps> = ({ isRegistering }) => {
  const initialState = isRegistering ? { email: "", password: "", name: "" } : { email: "", password: "" };
  const [formData, setFormData] = useState<LoginFormData>(initialState);
  const [formErrors, setFormErrors] = useState<LoginFormData>(initialState);
  const [serverError, setServerError] = useState<string>("");
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: validateAuthFormField(name, value)
    }));
  }, []);

  const authMutation = useMutation(
    () => {
      const url = isRegistering ? `${process.env.NEXT_BACKEND_URL}/register` : `${process.env.NEXT_BACKEND_URL}/login`;
      return axios.post(url, formData);
    },
    {
      onSuccess: (data) => {
        Cookie.set(process.env.NEXT_PUBLIC_USER_TOKEN!, data.data.token)
        router.push("/");
      },
      onError: () => {
        setServerError("Falha ao autenticar, por favor tente novamente.");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRegistering || (isRegistering && !Object.values(formErrors).some((error) => error))) {
      // authMutation.mutate();
      Cookie.set(process.env.NEXT_PUBLIC_USER_TOKEN!, "token")
      router.push("/");
    }
  };

  const hasErrors = isRegistering && Object.values(formErrors).some((error) => error);

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <AuthFormFields formData={formData} handleInputChange={handleInputChange} isRegistering={isRegistering} />
      </div>
      <div className="mt-6">
        <AuthButton text={!isRegistering ? "Logar" : "Registrar"} isDisabled={hasErrors} />
      </div>
      <FormErrorMessages 
        formErrors={formErrors} 
        isRegistering={isRegistering} 
        mutationError={authMutation.isError}
        serverErrorMessage={serverError}
      />
    </form>
  );
};