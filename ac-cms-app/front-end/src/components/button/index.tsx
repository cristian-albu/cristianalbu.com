import Button from "./Button";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type T_Button = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
