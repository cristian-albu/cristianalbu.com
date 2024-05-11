/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from "react";
import { T_Form, T_FormInput } from ".";
import TextInput from "../text-input";

const Form = forwardRef<HTMLFormElement, T_Form<T_FormInput>>(
    ({ form_title, inputs, children, ...htmlAttributes }, ref) => {
        return (
            <form
                className="w-full relative flex flex-col gap-2 justify-start items-start"
                ref={ref}
                {...htmlAttributes}
            >
                <div className="text-2xl">{form_title}</div>
                <div className="w-full">
                    {inputs.map((input) => (
                        <Inputs key={input.label} input={input} />
                    ))}
                </div>
                {children}
            </form>
        );
    }
);

export default Form;

const Inputs = ({ input }: { input: T_FormInput }) => {
    switch (input.type) {
        case "text":
        case "number":
            return <TextInput {...input}>{input.children}</TextInput>;

        default:
            return <TextInput {...input}>{input.children}</TextInput>;
    }
};
