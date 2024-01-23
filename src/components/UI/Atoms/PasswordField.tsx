import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { PasswordFieldProps } from '@/interfaces/PasswordFieldProps';

export const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange, error, helperText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <FormControl variant="outlined" fullWidth error={error}>
      <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        name="password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      <FormHelperText id="password-helper-text">{helperText}</FormHelperText>
    </FormControl>
  );
};