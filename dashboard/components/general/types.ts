import { ButtonHTMLAttributes, ReactNode } from "react";

export type T_ButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
> & {
    type?: "submit" | "link";
    children: ReactNode;
};
