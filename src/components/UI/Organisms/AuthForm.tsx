import React, { useState, useCallback } from "react";
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthFormFields } from "../Molecules/AuthFormFields";
import { AuthButton } from "../Atoms/AuthButton";
import { validateAuthFormField } from "@/utils/validateAuthFormField";

export const AuthForm: React.FC<FormProps> = ({ isRegistering }) => {
  const [formData, setFormData] = useState<LoginFormData>({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState<LoginFormData>({ email: "", password: "" });
  const [serverError, setServerError] = useState<string>("");
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isRegistering) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: validateAuthFormField(name, value)
      }));
    }
  }, [isRegistering]);

  const authMutation = useMutation(
    () => {
      const url = isRegistering ? `${process.env.NEXT_BACKEND_URL}/register` : `${process.env.NEXT_BACKEND_URL}/login`;
      return axios.post(url, formData);
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("authToken", data.data.token);
        router.push("/");
      },
      onError: (error: any) => {
        console.error(error);
        setServerError("Failed to authenticate. Please try again.");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRegistering || (isRegistering && !Object.values(formErrors).some((error) => error))) {
      authMutation.mutate();
    }
  };

  const hasErrors = isRegistering && Object.values(formErrors).some((error) => error);

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <AuthFormFields formData={formData} handleInputChange={handleInputChange} />
      </div>
      <div className="mt-6">
        <AuthButton text={!isRegistering ? "Logar" : "Registrar"} isDisabled={hasErrors} />
      </div>
      {authMutation.isError && <ErrorMessage message={serverError || "Failed to authenticate."} />}
    </form>
  );
};