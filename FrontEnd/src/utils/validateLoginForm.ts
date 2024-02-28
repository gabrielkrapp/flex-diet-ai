import { LoginFormErrors } from "@/interfaces/LoginFormErrors";

export const validateLoginForm = (formData: LoginFormData): LoginFormErrors => {
  let errors: LoginFormErrors = {};

  if (!formData.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email inválido';
  }

  if (!formData.password) {
    errors.password = 'Senha é obrigatória';
  } else if (formData.password.length < 8) {
    errors.password = 'Senha deve ter pelo menos 8 caracteres';
  }

  return errors;
};