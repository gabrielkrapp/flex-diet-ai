export const validateName = (value: string): string => {
    if (value === "") return "";
    if (value.trim().length < 3) return "O nome deve ter pelo menos 3 caracteres";
    return "";
};
  