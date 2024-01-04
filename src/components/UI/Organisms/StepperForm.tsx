import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { StepperFormProps } from '@/interfaces/StepperFormProps';
import { steps } from '@/utils/steps';

export default function StepperForm({
  activeStep,
  handleNext,
  handleBack,
  children
}: StepperFormProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 6, mb: 2 }}>
        {children}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
        <Button
          color="inherit"
          onClick={handleBack}
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? 'Registrar-se' : 'Próximo'}
        </Button>
      </Box>
    </Box>
  );
}
