import React, { useState, useCallback } from "react";
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthFormFields } from "../Molecules/AuthFormFields";
import { AuthButton } from "../Atoms/AuthButton";
import { validateAuthFormField } from "@/utils/validateAuthForm/validateAuthFormField";
import Cookie from 'js-cookie';
import { FormErrorMessages } from "../Molecules/FormErrorMessages";

export const AuthForm: React.FC = () => {
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState<LoginFormData>(initialState);
  const [formErrors, setFormErrors] = useState<LoginFormData>(initialState);
  const [serverError, setServerError] = useState<string>("");
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({
      ...prev,
      [name]: validateAuthFormField(name, value)
    }));
  }, []);

  const authMutation = useMutation(
    () => axios.post(`${process.env.NEXT_BACKEND_URL}/login`, formData),
    {
      onSuccess: (data) => {
        Cookie.set(process.env.NEXT_PUBLIC_USER_TOKEN!, data.data.token);
        router.push("/");
      },
      onError: () => {
        setServerError("Falha ao autenticar, por favor tente novamente.");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.values(formErrors).some(error => error)) {
      authMutation.mutate();
    }
  };

  const hasErrors = Object.values(formErrors).some(error => error);

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <AuthFormFields formData={formData} handleInputChange={handleInputChange} />
      </div>
      <div className="mt-6">
        <AuthButton text="Logar" isDisabled={hasErrors} />
      </div>
      <FormErrorMessages 
        formErrors={formErrors} 
        mutationError={authMutation.isError}
        serverErrorMessage={serverError}
      />
    </form>
  );
};
