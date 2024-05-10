import { T_ErrorResult } from ".";

const ErrorMessages = ({ errors }: { errors: T_ErrorResult }) => {
    if (!errors) {
        return null;
    }
    return (
        <div className="absolute right-4 bottom-[100%] mb-[-2rem] p-3 bg-gray-100 rounded-lg shadow-lg w-full max-w-[500px]">
            {errors.map((err, index) => (
                <p key={err.text} className="text-sm">
                    🚩 {index + 1}. {err.text} @ {err.key}
                </p>
            ))}
        </div>
    );
};

export default ErrorMessages;
