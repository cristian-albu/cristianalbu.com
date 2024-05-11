import { T_TextInput } from "../text-input";
import Form from "./Form";
import { FormHTMLAttributes, ReactNode } from "react";

export type T_FormInput = T_TextInput;

export type T_Form<T> = {
    form_title?: string;
    inputs: Array<T>;
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export default Form;
