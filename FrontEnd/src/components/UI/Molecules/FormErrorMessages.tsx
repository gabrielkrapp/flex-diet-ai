import { ErrorMessage } from "../Atoms/ErrorMessage";

export const FormErrorMessages: React.FC<FormErrorMessagesProps> = ({ formErrors, mutationError, serverErrorMessage }) => {
    return (
      <>
        {formErrors.email && <ErrorMessage message={formErrors.email} />}
        {formErrors.password && <ErrorMessage message={formErrors.password} />}
        {mutationError && <ErrorMessage message={serverErrorMessage || "Falha ao autenticar, por favor tente novamente."} />}
      </>
    );
  };  