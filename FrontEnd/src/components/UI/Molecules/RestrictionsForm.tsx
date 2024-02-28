import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

export const RestrictionsForm = ({ formData, setFormData }: any) => {
  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  return (
    <div className="space-y-4 pl-3 pr-3">
      <Typography variant="h6" className="text-lg font-semibold text-gray-800">Restrições Alimentares</Typography>
      <Typography variant="body2" className="text-sm text-gray-600">
        Marque as opções relevantes para você. Caso não possua restrições, deixe em branco.
      </Typography>
      <FormControlLabel
        control={<Checkbox name="diabetes" checked={formData.diabetes} onChange={handleChange} />}
        label="Diabetes"
        className="block"
      />
      <FormControlLabel
        control={<Checkbox name="lactose" checked={formData.lactose} onChange={handleChange} />}
        label="Intolerância à Lactose"
        className="block"
      />
      <FormControlLabel
        control={<Checkbox name="gluten" checked={formData.gluten} onChange={handleChange} />}
        label="Intolerância ao Glúten"
        className="block"
      />
    </div>
  );
};

