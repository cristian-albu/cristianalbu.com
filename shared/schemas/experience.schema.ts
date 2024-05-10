import z from "zod";
import { experience, tables, tool } from "../constants";
import { Tool_Schema } from "./tools.schema";

/**
 * Schema used for the creation of new services. No ID needed and the client is just a reference
 */
export const ExperienceContents_Schema = z.object({
    [experience.title.label]: z.string().max(experience.title.max),
    [experience.description.label]: z.string().max(experience.description.max),
    [experience.start_date]: z.coerce.date(),
    [experience.end_date]: z.coerce.date(),
    [experience.still_active]: z.boolean(),
    [experience.company]: z.string(),
    [experience.company_link]: z.string().url(),
    [experience.company_logo]: z.string().url(),
});

export const Experience_Schema = ExperienceContents_Schema.and(
    z.object({
        [experience.experience_id]: z.number().positive().int(),
    })
);

export const ExperienceFull_Schema = Experience_Schema.and(
    z.object({
        [experience.technologies]: z.array(Tool_Schema),
    })
);

export const Experiences = `--sql
CREATE TABLE ${tables.experience}(
        ${experience.experience_id} SERIAL PRIMARY KEY,
        ${experience.title.label} VARCHAR(${experience.title.max}) NOT NULL,
        ${experience.description.label} VARCHAR(${experience.description.max}) NOT NULL,
        ${experience.start_date} DATE NOT NULL,
        ${experience.end_date} DATE NOT NULL,
        ${experience.still_active} BOOLEAN DEFAULT false,
        ${experience.company} VARCHAR(63) NOT NULL,
        ${experience.company_link} VARCHAR(255) NOT NULL,
        ${experience.company_logo} VARCHAR(255) NOT NULL
);`;

export const Experiences_Tools = `--sql
CREATE TABLE ${tables.experience}_${tables.tools}(
        ${experience.experience_id} INTEGER NOT NULL,
        ${tool.tool_id} INTEGER NOT NULL,
        FOREIGN KEY (${experience.experience_id}) REFERENCES ${tables.experience}(${experience.experience_id}) ON DELETE CASCADE,
        FOREIGN KEY (${tool.tool_id}) REFERENCES ${tables.tools}(${tool.tool_id}) ON DELETE CASCADE,
        PRIMARY KEY (${experience.experience_id}, ${tool.tool_id})
);`;
