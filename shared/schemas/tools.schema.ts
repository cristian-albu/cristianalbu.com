import z from "zod";
import { tool } from "../constants";

export const ToolContents_Schema = z.object({
    [tool.title.label]: z.string().max(tool.title.max),
    [tool.description.label]: z.string().max(tool.description.max),
    [tool.image]: z.string().url(),
    [tool.category.label]: z.enum(tool.category.options),
});

export const Tool_Schema = ToolContents_Schema.and(
    z.object({
        [tool.tool_id]: z.number().positive(),
    })
);
