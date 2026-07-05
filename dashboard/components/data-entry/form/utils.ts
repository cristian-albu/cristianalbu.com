import {
    InputType,
    T_FormData,
    T_FormErrors,
    T_Input,
    T_InputValue,
} from "../types";

export function initializeState(data: T_Input[]): T_FormData {
    const initialState: Record<string, T_InputValue> = {};

    data.forEach((el) => {
        switch (el.type) {
            case InputType.text: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : "",
                };
            }
        }
    });

    return initialState;
}

export function initializeErrors(data: T_Input[]): T_FormErrors {
    return {};
}
