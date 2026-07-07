"use client";

import { ChangeEvent, FC } from "react";
import { T_TextareaInput, T_TextareaInputValue } from "../types";
import { InputError } from "../input-error";

export type T_TextareaInputProps = {
    data: T_TextareaInput;
    inputValue: T_TextareaInputValue;
    changeHandler: (name: string, newVal: T_TextareaInputValue) => void;
};

export const TextareaInput: FC<T_TextareaInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeHandler(data.name, { type: data.type, value: e.target.value });
    };

    return (
        <div className="flex flex-col w-full relative">
            <label className="w-full flex flex-col">
                <p>{data.label}</p>
                <textarea
                    className="w-full border-2 rounded-lg px-2 py-1 min-h-24 h-24"
                    value={inputValue.value}
                    onChange={localChangeHandler}
                />
            </label>
            {data.validation && (
                <InputError
                    errorList={data.validation}
                    inputValue={inputValue}
                />
            )}
        </div>
    );
};
