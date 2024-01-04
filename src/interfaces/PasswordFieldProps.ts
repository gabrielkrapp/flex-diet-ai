import { ChangeEvent } from "react";

export interface PasswordFieldProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}