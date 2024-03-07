import React, { useState, useCallback } from "react";
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthFormFields } from "../Molecules/AuthFormFields";
import { AuthButton } from "../Atoms/AuthButton";
import Cookie from 'js-cookie';
import { validateLoginForm } from "@/utils/validateLoginForm";
import { CustomAlert } from "../Atoms/Alerts";
import { LoginFormErrors } from "@/interfaces/LoginFormErrors";
import axiosInstance from "@/utils/axiosInstance";

export const AuthForm: React.FC = () => {
  const initialState: LoginFormData = { email: "", password: "" };
  const [formData, setFormData] = useState<LoginFormData>(initialState);
  const [formErrors, setFormErrors] = useState<LoginFormErrors>({});
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const authMutation = useMutation(
    () => axiosInstance.post(`/login`, formData),
    {
      onSuccess: (data) => {
        Cookie.set(process.env.NEXT_PUBLIC_USER_TOKEN!, data.data.token);
        router.push("/");
      },
      onError: () => {
        <CustomAlert severity="error">Falha ao autenticar, por favor tente novamente.</CustomAlert>
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateLoginForm(formData);
    setFormErrors(errors);

    if (!Object.values(errors).some(error => error)) {
      authMutation.mutate();
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <AuthFormFields formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />
      </div>
      <div className="mt-6">
        <AuthButton text="Logar" isDisabled={Object.values(formErrors).some(error => error)} />
      </div>
    </form>
  );
};
