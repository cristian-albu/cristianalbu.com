import z from "zod";
import { tables, tool } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed
 */
export const ToolContents_Schema = z.object({
    [tool.title.label]: z.string().max(tool.title.max),
    [tool.description.label]: z.string().max(tool.description.max),
    [tool.image]: z.string().url(),
    [tool.category.label]: z.enum(tool.category.options),
});

export const Tool_Schema = ToolContents_Schema.and(
    z.object({
        [tool.tool_id]: z.number().positive().int(),
    })
);

export const Tools = `--sql
CREATE TABLE ${tables.tools} (
        ${[tool.tool_id]} SERIAL PRIMARY KEY,
        ${[tool.title.label]} VARCHAR(${tool.title.max}) NOT NULL,
        ${[tool.description.label]} VARCHAR(${tool.description.max}) NOT NULL,
        ${[tool.image]} VARCHAR(255) NOT NULL,
        ${[tool.category.label]} VARCHAR(63) NOT NULL
);`;
