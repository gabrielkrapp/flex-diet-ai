import { LoginFormErrors } from "./LoginFormErrors";

export interface AuthFormFieldsProps {
    formData: LoginFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formErrors: LoginFormErrors;
}