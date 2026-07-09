"use client";

import { FC } from "react";
import { T_FormProps } from "../types";
import { Button } from "@/components";
import { useForm } from "./useForm";
import { Input } from "..";

export const Form: FC<T_FormProps> = ({ title, inputs, handlerProps }) => {
    const { handleSubmit, loadingState, handleDataChange, dataState } = useForm(
        {
            title,
            inputs,
            handlerProps,
        },
    );

    return (
        <form
            className="w-150 flex flex-col p-10 border-2 rounded-2xl justify-start items-start gap-4"
            onSubmit={handleSubmit}
        >
            <p>{title}</p>
            <div className="w-full flex flex-col gap-4 justify-start items-start">
                {inputs.map((el) => (
                    <Input
                        key={el.name}
                        data={el}
                        inputValue={dataState[el.name]}
                        changeHandler={handleDataChange}
                    />
                ))}
            </div>
            <Button type="submit" disabled={loadingState}>
                Submit
            </Button>
        </form>
    );
};
