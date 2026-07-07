import { ReactElement } from "react";
import { T_InputValidationFn, T_InputValue } from "../types";

export type T_InputErrorProps<T extends T_InputValue> = {
    errorList: T_InputValidationFn<T>[];
    inputValue: T;
};

export const InputError = <T extends T_InputValue>({
    errorList,
    inputValue,
}: T_InputErrorProps<T>): ReactElement => {
    return (
        <div>
            {errorList.map((err) => {
                const errMessage = err(inputValue);

                return (
                    <p key={errMessage} className="text-red-500">
                        {errMessage}
                    </p>
                );
            })}
        </div>
    );
};
