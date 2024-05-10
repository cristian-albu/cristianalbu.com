import { FC } from "react";
import { T_TextInput } from ".";

const TextInput: FC<T_TextInput> = ({ label, children, ...htmlAttributes }) => {
    return (
        <label id={`${label}-label`}>
            <div>{children}</div>
            <input
                name={label}
                className="w-full rounded-md border-2 transition-all border-solid border-gray-500 outline-none hover:border-violet-500 active:border-violet-700 px-2 py-[2px]"
                {...htmlAttributes}
            />
        </label>
    );
};

export default TextInput;
