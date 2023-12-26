import { ErrorMessage } from "../Atoms/ErrorMessage";

export const FormErrorMessages: React.FC<FormErrorMessagesProps> = ({ formErrors, isRegistering, mutationError, serverErrorMessage }) => {
    return (
      <>
        {formErrors.email && <ErrorMessage message={formErrors.email} />}
        {formErrors.password && <ErrorMessage message={formErrors.password} />}
        {isRegistering && formErrors.name && <ErrorMessage message={formErrors.name} />}
        {mutationError && <ErrorMessage message={serverErrorMessage || "Falha ao autenticar, por favor tente novamente."} />}
      </>
    );
  };  