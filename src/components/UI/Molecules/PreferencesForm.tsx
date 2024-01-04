import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

export const PreferencesForm = ({ formData, setFormData }: any) => {
  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  return (
    <div>
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