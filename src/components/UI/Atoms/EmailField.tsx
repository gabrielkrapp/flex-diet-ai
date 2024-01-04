import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

interface EmailFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EmailField: React.FC<EmailFieldProps> = ({ value, onChange }) => {
  return (
    <TextField
      label="Email"
      name="email"
      type="email"
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};