import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface HorizontalLinearStepperProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  children: React.ReactNode;
}

const steps = ['Informações Pessoais', 'Informações sobre alimentação', 'Registrar-se'];

export default function HorizontalLinearStepper({
  activeStep,
  handleNext,
  handleBack,
  children
}: HorizontalLinearStepperProps) {
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
          disabled={activeStep === 0}
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
