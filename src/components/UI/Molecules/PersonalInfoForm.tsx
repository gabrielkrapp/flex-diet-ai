import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, InputAdornment } from '@mui/material';
import { PasswordField } from '../Atoms/PasswordField';
import { EmailField } from '../Atoms/EmailField';
import { PersonalInfoFormProps } from '@/interfaces/PersonalInfoFormProps';

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ formData, setFormData, formErrors }) => {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if ((name === "height" || name === "weight") && value !== "" && !/^\d*\.?\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={Boolean(formErrors.firstName)}
            helperText={formErrors.firstName}
            label="Nome"
            name="firstName"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={Boolean(formErrors.lastName)}
            helperText={formErrors.lastName}
            label="Sobrenome"
            name="lastName"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
        <EmailField
          value={formData.email}
          onChange={handleChange}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
        />
        </Grid>
        <Grid item xs={6}>
        <PasswordField
          value={formData.password}
          onChange={handleChange}
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
        />
        </Grid>
        <Grid item xs={4}>
          <TextField
            error={Boolean(formErrors.weight)}
            helperText={formErrors.weight}
            label="Peso"
            name="weight"
            fullWidth
            value={formData.weight}
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            error={Boolean(formErrors.height)}
            helperText={formErrors.height}
            label="Altura"
            name="height"
            fullWidth
            value={formData.height}
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            error={Boolean(formErrors.dateOfBirth)}
            helperText={formErrors.dateOfBirth}
            label="Data de Nascimento"
            name="dateOfBirth"
            type="date"
            fullWidth
            value={formData.dateOfBirth}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: '2023-12-31', min: '1920-01-01' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};