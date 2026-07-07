"use client";

import { ChangeEvent, FC } from "react";
import { T_SwitchInput, T_SwitchInputValue } from "../types";
import { InputError } from "../input-error";

export type T_SwitchInputProps = {
    data: T_SwitchInput;
    inputValue: T_SwitchInputValue;
    changeHandler: (name: string, newVal: T_SwitchInputValue) => void;
};

export const SwitchInput: FC<T_SwitchInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeHandler(data.name, {
            type: data.type,
            value: e.target.checked,
        });
    };

    return (
        <div className="flex flex-col relative">
            <label className="w-full flex items-center gap-2">
                <div className="w-10 h-5 border-2 rounded-2xl relative cursor-pointer focus-within:shadow-lg">
                    <div
                        className={`w-4 aspect-square rounded-full absolute transition-transform bg-black  ${inputValue.value ? "translate-x-5" : "translate-x-[-5]"}`}
                    />
                    <input
                        type="checkbox"
                        className="w-0 h-0 p-0 m-0"
                        checked={inputValue.value}
                        onChange={localChangeHandler}
                    />
                </div>
                <p>{data.label}</p>
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
