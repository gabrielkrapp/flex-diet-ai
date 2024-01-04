import { RegistrationFormData } from "./RegistrationFormData";

export interface PersonalInfoFormProps {
    formData: RegistrationFormData;
    setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
}