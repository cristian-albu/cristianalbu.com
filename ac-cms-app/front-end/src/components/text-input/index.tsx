import { InputHTMLAttributes } from "react";
import TextInput from "./TextInput";

export type T_TextInput = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default TextInput;
