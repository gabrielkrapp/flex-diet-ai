import React, { useState, useEffect, ReactNode } from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import { CustomAlertProps } from '@/interfaces/CustomAlertProps';

export const CustomAlert: React.FC<CustomAlertProps> = ({ variant, severity, children }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  const alertProps = { ...variant ? { variant } : {}, severity };

  return (
    <Alert {...alertProps}>
      {children}
    </Alert>
  );
};