"use client";

import { ChangeEvent, FC } from "react";
import { T_FileUploadInput, T_FileUploadInputValue } from "../types";
import { InputError } from "../input-error";

export type T_FileUploadInputProps = {
    data: T_FileUploadInput;
    inputValue: T_FileUploadInputValue;
    changeHandler: (name: string, newVal: T_FileUploadInputValue) => void;
};

export const FileUploadInput: FC<T_FileUploadInputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        // changeHandler(data.name, { type: data.type, value: e.target.value });
    };

    return (
        <div className="flex flex-col w-full relative">
            <label className="w-full flex flex-col">
                <p>{data.label}</p>
                <input
                    type="file"
                    className="w-full border-2 rounded-lg px-2 py-1"
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
