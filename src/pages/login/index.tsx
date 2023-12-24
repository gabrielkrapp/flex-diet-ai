import { AuthForm } from "@/components/UI/Organisms/AuthForm";
import withProtectedAccess from "@/utils/withProtectedAccess";
import { useState } from "react";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            {isRegistering ? "Crie sua conta" : "Entre em sua conta"}
          </h2>
        </div>
        <AuthForm isRegistering={isRegistering}/>
        <div className="mt-4 text-center">
          {isRegistering ? (
            <>
              <span>Já possui uma conta? </span>
              <button
                onClick={toggleRegistering}
                className="text-blue-500 hover:text-blue-600"
              >
                Entrar
              </button>
            </>
          ) : (
            <>
              <span>Não possui uma conta? </span>
              <button
                onClick={toggleRegistering}
                className="text-blue-500 hover:text-blue-600"
              >
                Registrar-se
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withProtectedAccess(LoginPage, true);