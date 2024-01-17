import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { BiotipoSelector } from './BiotipoSelector';

export const PreferencesForm = ({ formData, setFormData }: any) => {
  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  const handleBiotipoChange = (biotipo: any) => {
    setFormData({ ...formData, biotipo });
  };

  return (
    <div>
      <BiotipoSelector 
        selectedBiotipo={formData.biotipo}
        onChange={handleBiotipoChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="isVegan"
            checked={formData.isVegan}
            onChange={handleChange}
          />
        }
        label="Vegano"
      />
    </div>
  );
};