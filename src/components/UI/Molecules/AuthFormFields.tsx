import { EmailField } from "../Atoms/EmailField";
import { PasswordField } from "../Atoms/PasswordField";

export const AuthFormFields: React.FC<AuthFormFieldsProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <EmailField value={formData.email} onChange={handleInputChange} />
      <div className="mt-3">
        <PasswordField value={formData.password} onChange={handleInputChange} />
      </div>
    </>
  );
};