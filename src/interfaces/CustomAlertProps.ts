import { AlertProps } from "@mui/material/Alert";
import { ReactNode } from "react";

export interface CustomAlertProps {
    variant?: 'filled' | 'outlined' | 'standard';
    severity: AlertProps['severity'];
    children: ReactNode;
}