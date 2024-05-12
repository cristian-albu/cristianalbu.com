import { ReactNode } from "react";
import Modal from "./Modal";

export type T_Modal = {
    target: string;
    children: ReactNode;
    close?: boolean;
};

export default Modal;
