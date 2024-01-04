import React, { useState } from 'react';
import { PersonalInfoForm } from '@/components/UI/Molecules/PersonalInfoForm';
import { DietaryPreferencesForm } from '@/components/UI/Molecules/DietaryPreferencesForm';
import HorizontalLinearStepper from '@/components/UI/Organisms/StepperForm';
import { useRouter } from 'next/router';

export default function MultiStepForm() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    height: '',
    email: '',
    password: '',
    vegan: false,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      router.push('/login');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-2xl bg-white max-w-2xl w-full"> {/* Ajuste na classe de sombra */}
        <HorizontalLinearStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      >
        {activeStep === 0 && <PersonalInfoForm formData={formData} setFormData={setFormData} />}
        {activeStep === 1 && <DietaryPreferencesForm formData={formData} setFormData={setFormData} />}
      </HorizontalLinearStepper>
      </div>
    </div>
  );
}