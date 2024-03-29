import React, { useState } from 'react';
import { PersonalInfoForm } from '@/components/UI/Molecules/PersonalInfoForm';
import { RestrictionsForm } from '@/components/UI/Molecules/RestrictionsForm';
import { useRouter } from 'next/router';
import { RegistrationFormData } from '@/interfaces/RegistrationFormData';
import StepperForm from '@/components/UI/Organisms/StepperForm';
import { steps } from '@/statics/steps';
import { useRegister } from '@/hooks/useRegister';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { BiotipoSelector } from '@/components/UI/Molecules/BiotipoSelector';
import { validateForm } from '@/utils/validateForm';

export default function Register() {
  const router = useRouter();
  const { mutate, isLoading, isError } = useRegister();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    email: '',
    password: '',
    vegan: false,
    biotipo: '',
    diabetes: false,
    lactose: false,
    gluten: false,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleNext = () => {
    let errors = {};
  
    if (activeStep === 0) {
      errors = validateForm(formData, false);
    }
  
    if (activeStep === 1) {
      errors = validateForm(formData, true);
    }
  
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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

  const handleBiotipoChange = (biotipo: string) => {
    setFormData({ ...formData, biotipo });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoading ? <LoadingComponent /> : (
        <div className="p-6 rounded-lg shadow-2xl bg-white max-w-3xl w-full">
          <StepperForm
            activeStep={activeStep}
            handleNext={handleSubmit}
            handleBack={handleBack}
          >
            {activeStep === 0 && <PersonalInfoForm formData={formData} setFormData={setFormData} formErrors={formErrors} />}
            {activeStep === 1 && <BiotipoSelector onChange={handleBiotipoChange} selectedBiotipo={formData.biotipo} error={Boolean(formErrors.biotipo)} errorMessage={formErrors.biotipo} />}
            {activeStep === 2 && <RestrictionsForm formData={formData} setFormData={setFormData} />}
          </StepperForm>
          {isError && <CustomAlert variant="filled" severity="error">Ocorreu algum erro no registro</CustomAlert>}
        </div>
      )}
    </div>
  );
}