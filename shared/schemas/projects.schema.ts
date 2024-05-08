import z from "zod";
import { client, project, tables } from "../constants";
import { Client_Schema } from "./clients.schema";

const ProjectCommon_Schema = z.object({
    [project.title.label]: z.string().max(project.title.max),
    [project.description.label]: z.string().max(project.description.max),
    [project.image]: z.string().url(),
    [project.content.label]: z.string().max(project.content.max),
    [project.category.label]: z.enum(project.category.options),
    [project.type.label]: z.enum(project.type.options),
});

/**
 * Schema used for the creation of new services. No ID needed and the client is just a reference
 */
export const ProjectContents_Schema = ProjectCommon_Schema.and(
    z.object({
        [project.client]: z.number().positive().int(),
    })
);

export const Project_Schema = ProjectCommon_Schema.and(
    z.object({
        [project.client]: Client_Schema,
        [project.project_id]: z.number().positive().int(),
    })
);

export const Projects = `--sql
CREATE TABLE ${tables.projects}(
        ${project.project_id} SERIAL PRIMARY KEY,
        ${project.title.label} VARCHAR(${project.title.max}) NOT NULL,
        ${project.description.label} VARCHAR(${project.description.max}) NOT NULL,
        ${project.image} VARCHAR(255) NOT NULL,
        ${project.content.label} JSON NOT NULL,
        ${project.category.label} VARCHAR(63) NOT NULL,
        ${project.type.label} VARCHAR(63) NOT NULL,
        ${project.client} INTEGER REFERENCES ${tables.client}(${client.client_id}) ON DELETE CASCADE
);`;
