interface AuthFormFieldsProps {
    formData: LoginFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRegistering: boolean;
}