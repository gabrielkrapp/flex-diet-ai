import { InputField } from "../Atoms/InputField";

export const AuthFormFields: React.FC<AuthFormFieldsProps> = ({ formData, handleInputChange }) => {
    return (
      <>
        <InputField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Senha"
          name="password"
          type="password"
          required
          placeholder="Senha"
          value={formData.password}
          onChange={handleInputChange}
        />
      </>
    );
};