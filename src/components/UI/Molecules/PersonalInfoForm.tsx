import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, InputAdornment } from '@mui/material';
import { PasswordField } from '../Atoms/PasswordField';
import { EmailField } from '../Atoms/EmailField';
import { PersonalInfoFormProps } from '@/interfaces/PersonalInfoFormProps';

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ formData, setFormData }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Nome"
            name="firstName"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Sobrenome"
            name="lastName"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Peso"
            name="peso"
            fullWidth
            value={formData.height}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Data de Nascimento"
            name="dateOfBirth"
            type="date"
            fullWidth
            value={formData.dateOfBirth}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6}>
          <EmailField value={formData.email} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <PasswordField value={formData.password} onChange={handleChange} />
        </Grid>
      </Grid>
    </div>
  );
};