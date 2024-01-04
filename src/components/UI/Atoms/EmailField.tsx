import TextField from '@mui/material/TextField';
import { EmailFieldProps } from '@/interfaces/EmailFieldProps';

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