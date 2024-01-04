import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
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
    <div className="fixed top-5 right-5 z-50">
      <Alert {...alertProps}>
        {children}
      </Alert>
    </div>
  );
};