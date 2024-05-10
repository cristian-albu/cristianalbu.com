import Form from "./Form";
import { T_TextInput } from "../text-input";
import { FormHTMLAttributes, ReactNode } from "react";

export type T_Form = {
    form_title?: string;
    inputs: Array<T_TextInput>;
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export default Form;
