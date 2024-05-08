import z from "zod";
import { experience } from "../constants";
import { Tool_Schema } from "./tools.schema";

const ExperienceCommonContents_Schema = z.object({
    [experience.title.label]: z.string().max(experience.title.max),
    [experience.description.label]: z.string().max(experience.description.max),
    [experience.start_date]: z.coerce.date(),
    [experience.end_date]: z.coerce.date(),
    [experience.company]: z.string(),
    [experience.company_link]: z.string().url(),
    [experience.company_logo]: z.string().url(),
});

export const ExperienceBaseContents_Schema =
    ExperienceCommonContents_Schema.and(
        z.object({
            [experience.technologies]: z.array(z.number().positive()),
        })
    );

export const ExperienceContents_Schema = ExperienceCommonContents_Schema.and(
    z.object({
        [experience.technologies]: z.array(Tool_Schema),
    })
);

export const ExperienceBase_Schema = ExperienceBaseContents_Schema.and(
    z.object({
        [experience.experience_id]: z.number().positive(),
    })
);

export const Experience_Schema = ExperienceContents_Schema.and(
    z.object({
        [experience.experience_id]: z.number().positive(),
    })
);
