import z from "zod";
import { project } from "../constants";
import { Client_Schema } from "./clients.schema";

const ProjectCommon_Schema = z.object({
    [project.title.label]: z.string().max(project.title.max),
    [project.description.label]: z.string().max(project.description.max),
    [project.image]: z.string().url(),
    [project.content.label]: z.string().max(project.content.max),
    [project.category.label]: z.enum(project.category.options),
    [project.type.label]: z.enum(project.type.options),
});

export const ProjectBaseContents_Schema = ProjectCommon_Schema.and(
    z.object({
        [project.client]: z.number().positive(),
    })
);

export const ProjectContents_Schema = ProjectCommon_Schema.and(
    z.object({
        [project.client]: Client_Schema,
    })
);

export const ProjectBase_Schema = ProjectBaseContents_Schema.and(
    z.object({
        [project.project_id]: z.number().positive(),
    })
);

export const Project_Schema = ProjectContents_Schema.and(
    z.object({
        [project.project_id]: z.number().positive(),
    })
);
