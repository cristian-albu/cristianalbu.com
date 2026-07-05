"use client";

import { ChangeEvent, FC } from "react";
import { T_InputValue, T_TextInput } from "../types";

export type T_TextInputProps = {
    data: T_TextInput;
    value?: string;
    errors: string[];
    changeHandler: (name: string, newVal: T_InputValue) => void;
};

export const TextInput: FC<T_TextInputProps> = ({
    data,
    value,
    errors,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeHandler(data.name, { type: data.type, value: e.target.value });
    };

    return (
        <div className="flex flex-col w-full relative">
            <label className="w-full flex flex-col">
                <p>{data.label}</p>
                <input
                    type="text"
                    className="w-full border-2 rounded-lg px-2 py-1"
                    value={value}
                    onChange={localChangeHandler}
                />
            </label>
            {errors.length && (
                <div>
                    {errors.map((err) => (
                        <p key={err} className="text-red-500">
                            {err}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
