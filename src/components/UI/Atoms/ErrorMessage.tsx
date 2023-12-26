export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <p className="mt-2 text-red-500">{message}</p>;
};