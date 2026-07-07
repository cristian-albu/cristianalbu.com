"use client";

import { ChangeEvent, FC } from "react";
import { T_SelectInput, T_SelectInputValue } from "../types";
import { InputError } from "../input-error";

export type T_SelectInputProps = {
    data: T_SelectInput;
    inputValue: T_SelectInputValue;
    changeHandler: (name: string, newVal: T_SelectInputValue) => void;
};

export const SelectInput: FC<T_SelectInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        changeHandler(data.name, {
            type: data.type,
            value: e.target.value,
        });
    };

    return (
        <div className="flex flex-col w-full relative">
            <label className="w-full flex flex-col">
                <p>{data.label}</p>
                <select
                    data-modern
                    className="w-full rounded-lg border-2 bg-white px-3 py-2 **:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-50"
                    value={inputValue.value}
                    onChange={localChangeHandler}
                >
                    {data.options.map((el) => (
                        <option
                            key={el.value}
                            value={el.value}
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-50 aria-selected:bg-indigo-100 aria-selected:font-medium"
                        >
                            {el.label}
                        </option>
                    ))}
                </select>
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
