"use client";
import { Form, InputType, Methods, T_Input } from "@/components";
import { FC } from "react";

const skillsConfig: T_Input[] = [
    {
        name: "TextInput",
        type: InputType.text,
        label: "Text input",
        defaultValue: "",
    },
    {
        name: "NumberInput",
        type: InputType.number,
        label: "Number input",
        defaultValue: 0,
    },
    {
        name: "SelectInput",
        type: InputType.select,
        label: "Select input",
        defaultValue: "",
        options: [
            { label: "First option", value: "first" },
            { label: "Second option", value: "second" },
            { label: "Third option", value: "third" },
        ],
    },
    {
        name: "TextareaInput",
        type: InputType.textarea,
        label: "Textarea input",
        defaultValue: "",
    },
    {
        name: "SwitchInput",
        type: InputType.switch,
        label: "Switch input",
        defaultValue: false,
    },
    {
        name: "RadioInput",
        type: InputType.radio,
        label: "Radio input",
        defaultValue: "",
        options: [
            { label: "First option", value: "first" },
            { label: "Second option", value: "second" },
            { label: "Third option", value: "third" },
        ],
    },

    {
        name: "FileUploadInput",
        type: InputType.fileUpload,
        label: "File upload input",
        validation: [],
    },
];

export const HomePage: FC = () => {
    return (
        <div className="w-full h-full p-10 flex flex-col justify-center items-center">
            <Form
                title="Skills"
                inputs={skillsConfig}
                handlerProps={{ endpoint: "", method: Methods.POST }}
            />
        </div>
    );
};
