import Form from "../components/form";
import { tool } from "../../../../shared/constants";
import {
    T_Tool,
    T_ToolContents,
    ToolContents_Schema,
} from "../../../../shared/schemas";
import { T_TextInput } from "../components/text-input";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import useFetch from "../utils/useFetch";
import Button from "../components/button";
import handleValidations from "../utils/handleValidations";
import ErrorMessages, { T_ErrorResult } from "../components/error-messages";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { tool_id, ...toolProps } = tool;

const formInputs: T_TextInput[] = Object.values(toolProps).map((val) => {
    const label = typeof val === "string" ? val : val.label;
    const type = typeof val !== "string" && "type" in val ? val.type : "text";
    const dedaultVal =
        typeof val !== "string" && "options" in val ? val.options[0] : "";
    return {
        label: label,
        type: type,
        children: label,
        defaultValue: dedaultVal,
    };
});

const defaultFormVal = Object.values(tool).reduce((acc, curr) => {
    if (curr === "tool_id") {
        return acc;
    }
    const key = curr.label;
    let defaultVal = "";

    if ("options" in curr) {
        defaultVal = curr.options[0];
    }

    return { ...acc, [key]: defaultVal };
}, {}) as T_ToolContents;

const Tools = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { data, error, loading, refetch } = useFetch<T_Tool[]>("tools");

    const [formValues, setFormValues] = useState(defaultFormVal);

    const [validationError, setValidationErrors] =
        useState<T_ErrorResult>(null);

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const newVal = {
            ...formValues,
            [e.target.name]: e.target.value,
        };
        setFormValues(newVal);

        const err = handleValidations<T_ToolContents>(
            newVal,
            ToolContents_Schema
        );

        setValidationErrors(err);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const err = handleValidations<T_ToolContents>(
            formValues,
            ToolContents_Schema
        );

        setValidationErrors(err);

        if (!err) {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_ORIGIN}/api/tools`,
                    {
                        method: "POST",
                        body: JSON.stringify(formValues),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (res.status === 201) {
                    refetch();
                    formRef.current?.reset();
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="p-10">
            {data === null || loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {data.map((tool) => (
                        <div key={tool.tool_id}>{tool.title}</div>
                    ))}
                </div>
            )}
            {error !== null && <div>Error</div>}
            <Form
                ref={formRef}
                inputs={formInputs}
                onChange={handleChange}
                onSubmit={handleSubmit}
                form_title="Tools"
            >
                <ErrorMessages errors={validationError} />
                <Button
                    type="submit"
                    disabled={
                        validationError && validationError.length > 0
                            ? true
                            : false
                    }
                >
                    Add tool
                </Button>
            </Form>
        </div>
    );
};

export default Tools;
