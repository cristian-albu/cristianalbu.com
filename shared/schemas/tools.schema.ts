import z from "zod";
import { tables, tool } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed
 */
export const ToolContents_Schema = z
    .object({
        [tool.title.label]: z.string().max(tool.title.max).min(tool.title.min),
        [tool.description.label]: z
            .string()
            .max(tool.description.max)
            .min(tool.description.min),
        [tool.image.label]: z.string().url(),
        [tool.category.label]: z.enum(tool.category.options),
    })
    .strict();

const { ...commonProps } = ToolContents_Schema.shape;
export const Tool_Schema = z
    .object({
        ...commonProps,
        [tool.tool_id]: z.number().positive().int(),
    })
    .strict();

export const Tools = `--sql
CREATE TABLE ${tables.tools} (
        ${[tool.tool_id]} SERIAL PRIMARY KEY,
        ${[tool.title.label]} VARCHAR(${tool.title.max}) UNIQUE NOT NULL,
        ${[tool.description.label]} VARCHAR(${tool.description.max}) NOT NULL,
        ${[tool.image.label]} VARCHAR(255) NOT NULL,
        ${[tool.category.label]} VARCHAR(63) NOT NULL
);`;
