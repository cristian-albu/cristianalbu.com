"use client";

import { ChangeEvent, FC } from "react";
import { T_NumberInput, T_NumberInputValue } from "../types";
import { InputError } from "../input-error";

export type T_NumberInputProps = {
    data: T_NumberInput;
    inputValue: T_NumberInputValue;
    changeHandler: (name: string, newVal: T_NumberInputValue) => void;
};

export const NumberInput: FC<T_NumberInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
        changeHandler(data.name, {
            type: data.type,
            value: isNaN(value) ? 0 : value,
        });
    };

    return (
        <div className="flex flex-col w-full relative">
            <label className="w-full flex flex-col">
                <p>{data.label}</p>
                <input
                    type="number"
                    className="w-full border-2 rounded-lg px-2 py-1"
                    value={inputValue.value === 0 ? "" : inputValue.value}
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
