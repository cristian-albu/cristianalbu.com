import { ZodObject, ZodRawShape } from "zod";
import { T_FormInput } from "../form";
import ResourceBuilder from "./ResourceBuilder";

export type T_ResourceBuilder = {
    formInputs: T_FormInput[];
    schema: ZodObject<ZodRawShape>;
    apiUri: string;
    reqMethod: "POST" | "PUT";
    refetch: () => void;
    formTitle?: string;
};

export default ResourceBuilder;
