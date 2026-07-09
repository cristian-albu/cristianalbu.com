"use client";

import { SubmitEvent, useState } from "react";
import { T_FormData, T_FormErrors, T_FormProps, T_InputValue } from "../types";
import { initializeErrors, initializeState } from "./utils";

export type T_UseForm = {
    dataState: T_FormData;
    errorState: T_FormErrors;
    loadingState: boolean;
    handleSubmit: (e: SubmitEvent<HTMLFormElement>) => Promise<void>;
    handleDataChange: (name: string, newVal: T_InputValue) => void;
};

export const useForm = ({ inputs, handlerProps }: T_FormProps): T_UseForm => {
    const [dataState, setDataState] = useState<T_FormData>(() =>
        initializeState(inputs),
    );

    const [errorState, setErrorState] = useState<T_FormErrors>(() =>
        initializeErrors(inputs),
    );
    const [loadingState, setLoadingState] = useState(false);

    const handleDataChange = (name: string, newVal: T_InputValue) => {
        setDataState((prev) => ({
            ...prev,
            [name]: newVal,
        }));
    };

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoadingState(true);

        console.log(dataState);
    };

    return {
        dataState,
        errorState,
        loadingState,
        handleSubmit,
        handleDataChange,
    };
};
