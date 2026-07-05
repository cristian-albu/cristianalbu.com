import React, { FC } from "react";
import { InputType, T_Input, T_InputValue } from "../types";
import { TextInput } from "../text-input";

export type T_InputProps = {
    data: T_Input;
    value: T_InputValue;
    changeHandler: (name: string, newVal: T_InputValue) => void;
};

export const Input: FC<T_InputProps> = ({ data, value, changeHandler }) => {
    switch (data.type) {
        case InputType.text:
            return (
                <TextInput
                    data={data}
                    errors={["some err"]}
                    value={value.type === data.type ? value.value : undefined}
                    changeHandler={changeHandler}
                />
            );
        default:
            return null;
    }
};
