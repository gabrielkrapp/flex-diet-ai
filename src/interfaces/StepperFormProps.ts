export interface StepperFormProps {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
    children: React.ReactNode;
}