import { ChangeEvent } from "react";

export interface EmailFieldProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
}