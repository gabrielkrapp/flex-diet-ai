export const AuthButton: React.FC<AuthButtonProps> = ({ text, isDisabled }) => {
    return (
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
        disabled={isDisabled}
      >
        {text}
      </button>
    );
  };
