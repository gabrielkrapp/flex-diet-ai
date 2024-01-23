import { RegistrationFormData } from "./RegistrationFormData";

export interface BiotipoSelectorProps {
    selectedBiotipo: string;
    onChange: (biotipo: string) => void;
    error: boolean;
    errorMessage: string;
}