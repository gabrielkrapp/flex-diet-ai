export const validatePassword = (value: string): string => {
    if (value === "") return "";
    if (value.length < 8) return "A senha precisa ter pelo menos 8 caracteres";
    if (!/[A-Z]/.test(value)) return "A senha precisa ter ao menos uma letra maiúscula";
    if (!/[a-z]/.test(value)) return "A senha precisa ter ao menos uma letra minúscula";
    if (!/[0-9]/.test(value)) return "A senha precisa ter ao menos um número";
    if (!/[!@#$%^&*]/.test(value)) return "A senha precisa ter ao menos um símbolo (!@#$%^&*)";
    return "";
};
  