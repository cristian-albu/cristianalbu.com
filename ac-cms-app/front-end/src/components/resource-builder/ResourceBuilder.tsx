import { ChangeEvent, FormEvent, useRef, useState } from "react";
import handleValidations from "../../utils/handleValidations";
import Button from "../button";
import ErrorMessages, { T_ErrorResult } from "../error-messages";
import Form from "../form";
import { T_ResourceBuilder } from ".";

function ResourceBuilder<T>({
    formInputs,
    schema,
    apiUri,
    reqMethod,
    formTitle,
    refetch,
}: T_ResourceBuilder) {
    const formRef = useRef<HTMLFormElement>(null);

    const defaultVal = formInputs.reduce((acc, curr) => {
        return { ...acc, [curr.label]: curr.defaultValue };
    }, {}) as T;

    const [formValues, setFormValues] = useState<T>(defaultVal);

    const [validationError, setValidationErrors] =
        useState<T_ErrorResult>(null);

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const newVal = {
            ...formValues,
            [e.target.name]: e.target.value,
        };
        setFormValues(newVal);

        const err = handleValidations<T>(newVal, schema);

        setValidationErrors(err);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const err = handleValidations<T>(formValues, schema);

        setValidationErrors(err);

        if (!err) {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_ORIGIN}/api/${apiUri}`,
                    {
                        method: reqMethod,
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
        <Form
            ref={formRef}
            inputs={formInputs}
            onChange={handleChange}
            onSubmit={handleSubmit}
            form_title={formTitle}
        >
            <ErrorMessages errors={validationError} />
            <Button
                type="submit"
                disabled={
                    validationError && validationError.length > 0 ? true : false
                }
            >
                Create resource
            </Button>
        </Form>
    );
}

export default ResourceBuilder;
