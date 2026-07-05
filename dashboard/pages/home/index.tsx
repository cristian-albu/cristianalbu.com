"use client";
import { Form, InputType, Methods, T_Input } from "@/components";
import { FC } from "react";

const skillsConfig: T_Input[] = [
    {
        name: "name",
        type: InputType.text,
        label: "Name",
        defaultValue: "",
        validation: [],
    },
];

export const HomePage: FC = () => {
    return (
        <div>
            <Form
                title="Skills"
                inputs={skillsConfig}
                handlerProps={{ endpoint: "", method: Methods.POST }}
            />
        </div>
    );
};
