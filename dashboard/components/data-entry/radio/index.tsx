"use client";

import { ChangeEvent, FC } from "react";
import { T_RadioInput, T_RadioInputValue } from "../types";
import { InputError } from "../input-error";

export type T_RadioInputProps = {
    data: T_RadioInput;
    inputValue: T_RadioInputValue;
    changeHandler: (name: string, newVal: T_RadioInputValue) => void;
};

export const RadioInput: FC<T_RadioInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeHandler(data.name, { type: data.type, value: e.target.value });
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <p>{data.label}</p>
            <fieldset className="flex flex-col gap-2">
                {data.options.map((el) => (
                    <label
                        key={el.value}
                        className="w-full flex items-center gap-1"
                    >
                        <div className="flex border-2 w-6 aspect-square rounded-full p-1 cursor-pointer relative focus-within:shadow-xl">
                            <div
                                className={`w-3 relative aspect-square rounded-full transition-colors ${inputValue.value === el.value ? "bg-black" : "bg-transparent"}`}
                            />
                            <input
                                type="radio"
                                name={data.label}
                                className="w-0 h-0 m-0 p-0"
                                checked={inputValue.value === el.value}
                                value={el.value}
                                onChange={localChangeHandler}
                            />
                        </div>

                        <p>{el.label}</p>
                    </label>
                ))}
            </fieldset>
            {data.validation && (
                <InputError
                    errorList={data.validation}
                    inputValue={inputValue}
                />
            )}
        </div>
    );
};
