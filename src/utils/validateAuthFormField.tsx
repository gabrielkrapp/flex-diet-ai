export const validateAuthFormField = (
    name: string,
    value: string,
  ): string => {
    switch (name) {
      case "username":
        return value.trim() === "" ? "Usuário é obrigatório" : "";
      case "password":
        return value.length < 6
          ? "A senha precisa ser maior do que 6 caracteres"
          : "";
      default:
        return "";
    }
};