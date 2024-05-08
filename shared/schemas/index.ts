import { z } from "zod";
import { ToolContents_Schema, Tool_Schema, Tools } from "./tools.schema";
import {
    ExperienceContents_Schema,
    Experience_Schema,
    ExperienceFull_Schema,
    Experiences,
    Experiences_Tools,
} from "./experience.schema";
import {
    ArticleContents_Schema,
    Article_Schema,
    Articles,
} from "./articles.schema";
import {
    ClientContents_Schema,
    Client_Schema,
    Clients,
} from "./clients.schema";
import {
    ProjectContents_Schema,
    Project_Schema,
    Projects,
} from "./projects.schema";
import {
    ServiceContents_Schema,
    Service_Schema,
    Services,
} from "./services.schema";
import {
    CertificationContents_Schema,
    Certification_Schema,
    Certifications,
} from "./certifications.schema";
import { tables } from "../constants";

export type T_ToolContents = z.infer<typeof ToolContents_Schema>;
export type T_Tool = z.infer<typeof Tool_Schema>;
export type T_ExperienceContents = z.infer<typeof ExperienceContents_Schema>;
export type T_Experience = z.infer<typeof Experience_Schema>;
export type T_ExperienceFull = z.infer<typeof ExperienceFull_Schema>;
export type T_ArticleContents = z.infer<typeof ArticleContents_Schema>;
export type T_Article = z.infer<typeof Article_Schema>;
export type T_ClientContents = z.infer<typeof ClientContents_Schema>;
export type T_Client = z.infer<typeof Client_Schema>;
export type T_ProjectBaseContents = z.infer<typeof ProjectContents_Schema>;
export type T_Project = z.infer<typeof Project_Schema>;
export type T_ServiceContents = z.infer<typeof ServiceContents_Schema>;
export type T_Service = z.infer<typeof Service_Schema>;
export type T_CertificationContents = z.infer<
    typeof CertificationContents_Schema
>;
export type T_Certification = z.infer<typeof Certification_Schema>;

const sql_tables = [
    { name: tables.tools, query: Tools },
    { name: tables.certification, query: Certifications },
    { name: tables.service, query: Services },
    { name: tables.article, query: Articles },
    { name: tables.client, query: Clients },
    { name: tables.projects, query: Projects },
    { name: tables.experience, query: Experiences },
    { name: `${tables.experience}_${tables.tools}`, query: Experiences_Tools },
];

export {
    sql_tables,
    ToolContents_Schema,
    Tool_Schema,
    ExperienceContents_Schema,
    Experience_Schema,
    ExperienceFull_Schema,
    ArticleContents_Schema,
    Article_Schema,
    ClientContents_Schema,
    Client_Schema,
    ProjectContents_Schema,
    Project_Schema,
    ServiceContents_Schema,
    Service_Schema,
    CertificationContents_Schema,
    Certification_Schema,
};
