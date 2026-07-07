export enum InputType {
    text = "text",
    number = "number",
    textarea = "textarea",
    radio = "radio",
    select = "select",
    switch = "switch",
    fileUpload = "fileUpload",
}

export enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export type T_TextInputValue = {
    type: InputType.text;
    value: string;
};

export type T_NumberInputValue = {
    type: InputType.number;
    value: number;
};

export type T_TextareaInputValue = {
    type: InputType.textarea;
    value: string;
};

export type T_SelectInputValue = {
    type: InputType.select;
    value: string;
};

export type T_RadioInputValue = {
    type: InputType.radio;
    value: string;
};

export type T_SwitchInputValue = {
    type: InputType.switch;
    value: boolean;
};

export type T_FileUploadInputValue = {
    type: InputType.fileUpload;
    value: string;
};

export type T_InputValue =
    | T_TextInputValue
    | T_NumberInputValue
    | T_TextareaInputValue
    | T_SelectInputValue
    | T_RadioInputValue
    | T_SwitchInputValue
    | T_FileUploadInputValue;

export type T_InputValidationFn<T extends T_InputValue> = (value: T) => string;

export type T_Option = {
    label: string;
    value: string;
    description?: string;
    icon?: {
        source: string;
        alt: string;
    };
};

export type T_TextInput = {
    name: string;
    label: string;
    type: InputType.text;
    defaultValue?: string;
    validation?: T_InputValidationFn<T_TextInputValue>[];
};

export type T_NumberInput = {
    name: string;
    label: string;
    type: InputType.number;
    defaultValue: number;
    validation?: T_InputValidationFn<T_NumberInputValue>[];
};

export type T_TextareaInput = {
    name: string;
    label: string;
    type: InputType.textarea;
    defaultValue?: string;
    validation?: T_InputValidationFn<T_TextareaInputValue>[];
};

export type T_RadioInput = {
    name: string;
    label: string;
    type: InputType.radio;
    options: T_Option[];
    defaultValue?: string;
    validation?: T_InputValidationFn<T_RadioInputValue>[];
};

export type T_SelectInput = {
    name: string;
    label: string;
    type: InputType.select;
    options: T_Option[];
    defaultValue?: string;
    validation?: T_InputValidationFn<T_SelectInputValue>[];
};

export type T_SwitchInput = {
    name: string;
    label: string;
    type: InputType.switch;
    defaultValue?: boolean;
    validation?: T_InputValidationFn<T_SwitchInputValue>[];
};

export type T_FileUploadInput = {
    name: string;
    label: string;
    type: InputType.fileUpload;
    validation?: T_InputValidationFn<T_FileUploadInputValue>[];
};

export type T_Input =
    | T_TextInput
    | T_NumberInput
    | T_TextareaInput
    | T_RadioInput
    | T_SelectInput
    | T_SwitchInput
    | T_FileUploadInput;

export type T_FormData = Record<string, T_InputValue>;
export type T_FormErrors = Record<string, string[]>;

export type T_FormHandlerProps = {
    endpoint: string;
    method: Methods.POST | Methods.PUT;
};

export type T_FormProps = {
    title: string;
    inputs: T_Input[];
    handlerProps: T_FormHandlerProps;
};
