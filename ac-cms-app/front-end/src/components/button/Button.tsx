import { FC } from "react";
import { T_Button } from ".";

const Button: FC<T_Button> = ({ children, ...htmlAttriutres }) => {
    return (
        <button
            className="px-4 py-2 transition-all bg-black text-white rounded-lg hover:bg-violet-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
            {...htmlAttriutres}
        >
            {children}
        </button>
    );
};

export default Button;
