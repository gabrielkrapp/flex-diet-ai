export const validateEmail = (value: string): string => {
    if (value === "") return "";
    if (!/^\S+@\S+\.\S+$/.test(value)) return "E-mail inválido";
    return "";
};
  