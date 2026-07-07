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
                break;
            }
            case InputType.number: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : 0,
                };
                break;
            }
            case InputType.textarea: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : "",
                };
                break;
            }
            case InputType.switch: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : false,
                };
                break;
            }
            case InputType.radio: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : "",
                };
                break;
            }
            case InputType.select: {
                initialState[el.name] = {
                    type: el.type,
                    value: el.defaultValue ? el.defaultValue : "",
                };
                break;
            }
            case InputType.fileUpload: {
                initialState[el.name] = {
                    type: el.type,
                    value: "",
                };
                break;
            }
        }
    });

    return initialState;
}

export function initializeErrors(data: T_Input[]): T_FormErrors {
    return {};
}
