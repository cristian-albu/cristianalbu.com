import { FC } from "react";
import { InputType, T_Input, T_InputValue } from "../types";
import {
    TextInput,
    NumberInput,
    SwitchInput,
    TextareaInput,
    RadioInput,
    SelectInput,
    FileUploadInput,
} from "..";

export type T_InputProps = {
    data: T_Input;
    inputValue: T_InputValue;
    changeHandler: (name: string, newVal: T_InputValue) => void;
};

export const Input: FC<T_InputProps> = ({
    data,
    inputValue,
    changeHandler,
}) => {
    switch (data.type) {
        case InputType.text:
            if (data.type !== inputValue.type) return null;

            return (
                <TextInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.number:
            if (data.type !== inputValue.type) return null;

            return (
                <NumberInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.textarea:
            if (data.type !== inputValue.type) return null;

            return (
                <TextareaInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.switch:
            if (data.type !== inputValue.type) return null;

            return (
                <SwitchInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.radio:
            if (data.type !== inputValue.type) return null;

            return (
                <RadioInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.select:
            if (data.type !== inputValue.type) return null;

            return (
                <SelectInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        case InputType.fileUpload:
            if (data.type !== inputValue.type) return null;

            return (
                <FileUploadInput
                    data={data}
                    inputValue={inputValue}
                    changeHandler={changeHandler}
                />
            );
        default:
            return null;
    }
};
