import { RegistrationFormData } from "@/interfaces/RegistrationFormData";

export const validateForm = (formData: RegistrationFormData): Record<string, string> => {
  let errors: Record<string, string> = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'Nome é obrigatório';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Sobrenome é obrigatório';
  }

  if (!formData.height.trim()) {
    errors.height = 'Altura é obrigatório';
  }

  if (!formData.weight.trim()) {
    errors.weight = 'Peso é obrigatório';
  }

  if (!formData.dateOfBirth.trim()) {
    errors.dateOfBirth = 'Data de nascimento é obrigatória';
  }

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