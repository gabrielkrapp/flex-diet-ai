import { AuthFormFieldsProps } from "@/interfaces/AuthFormFieldsProps";
import { EmailField } from "../Atoms/EmailField";
import { PasswordField } from "../Atoms/PasswordField";

export const AuthFormFields: React.FC<AuthFormFieldsProps> = ({ formData, handleInputChange, formErrors }) => {
  return (
    <>
      <EmailField
        value={formData.email}
        onChange={handleInputChange}
        error={Boolean(formErrors.email)}
        helperText={formErrors.email}
      />
      <div className="mt-4">
        <PasswordField
          value={formData.password}
          onChange={handleInputChange}
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
        />
      </div>
    </>
  );
};