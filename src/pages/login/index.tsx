import { useRouter } from 'next/router';
import { AuthForm } from "@/components/UI/Organisms/AuthForm";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entre em sua conta
          </h2>
        </div>
        <AuthForm />
        <div className="mt-4 text-center">
          <span>Não possui uma conta? </span>
          <button
            onClick={() => router.push('/register')}
            className="text-blue-500 hover:text-blue-600"
          >
            Registrar-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;