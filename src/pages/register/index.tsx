import React, { useState } from 'react';
import { PersonalInfoForm } from '@/components/UI/Molecules/PersonalInfoForm';
import { PreferencesForm } from '@/components/UI/Molecules/PreferencesForm';
import { useRouter } from 'next/router';
import { RegistrationFormData } from '@/interfaces/RegistrationFormData';
import StepperForm from '@/components/UI/Organisms/StepperForm';
import { steps } from '@/utils/steps';
import { useRegister } from '@/hooks/useRegister';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';

export default function Register() {
  const router = useRouter();
  const { mutate, isLoading, isError } = useRegister();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<RegistrationFormData>({
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

  const handleSubmit = () => {
    if (activeStep === steps.length - 1) {
      mutate(formData);
    } else {
      handleNext();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoading ? <LoadingComponent /> : (
        <div className="p-6 rounded-lg shadow-2xl bg-white max-w-2xl w-full">
          <StepperForm
            activeStep={activeStep}
            handleNext={handleSubmit}
            handleBack={handleBack}
          >
            {activeStep === 0 && <PersonalInfoForm formData={formData} setFormData={setFormData} />}
            {activeStep === 1 && <PreferencesForm formData={formData} setFormData={setFormData} />}
          </StepperForm>
          {isError && <CustomAlert severity="error">Ocorreu algum erro no registro</CustomAlert>}
        </div>
      )}
    </div>
  );
}