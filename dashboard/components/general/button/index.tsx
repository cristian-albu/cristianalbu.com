import { FC } from "react";
import { T_ButtonProps } from "../types";

export const Button: FC<T_ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="bg-black flex justify-center items-center text-white px-5 py-2 rounded-xl hover:scale-[101%] transition-all cursor-pointer"
            {...props}
        >
            {children}
        </button>
    );
};
