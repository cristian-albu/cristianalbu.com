import { z } from "zod";
import { ToolContents_Schema, Tool_Schema } from "./tools.schema";
import {
    ExperienceBaseContents_Schema,
    ExperienceContents_Schema,
    ExperienceBase_Schema,
    Experience_Schema,
} from "./experience.schema";
import { ArticleContents_Schema, Article_Schema } from "./articles.schema";
import { ClientContents_Schema, Client_Schema } from "./clients.schema";
import {
    ProjectBaseContents_Schema,
    ProjectContents_Schema,
    ProjectBase_Schema,
    Project_Schema,
} from "./projects.schema";
import { ServiceContents_Schema, Service_Schema } from "./services.schema";
import {
    CertificationContents_Schema,
    Certification_Schema,
} from "./certifications.schema";

export type T_ToolContents = z.infer<typeof ToolContents_Schema>;
export type T_Tool = z.infer<typeof Tool_Schema>;
export type T_ExperienceBaseContents = z.infer<
    typeof ExperienceBaseContents_Schema
>;
export type T_ExperienceContents = z.infer<typeof ExperienceContents_Schema>;
export type T_ExperienceBase = z.infer<typeof ExperienceBase_Schema>;
export type T_Experience = z.infer<typeof Experience_Schema>;
export type T_ArticleContents = z.infer<typeof ArticleContents_Schema>;
export type T_Article = z.infer<typeof Article_Schema>;
export type T_ClientContents = z.infer<typeof ClientContents_Schema>;
export type T_Client = z.infer<typeof Client_Schema>;
export type T_ProjectBaseContents = z.infer<typeof ProjectBaseContents_Schema>;
export type T_ProjectContents = z.infer<typeof ProjectContents_Schema>;
export type T_ProjectBase = z.infer<typeof ProjectBase_Schema>;
export type T_Project = z.infer<typeof Project_Schema>;
export type T_ServiceContents = z.infer<typeof ServiceContents_Schema>;
export type T_Service = z.infer<typeof Service_Schema>;
export type T_CertificationContents = z.infer<
    typeof CertificationContents_Schema
>;
export type T_Certification = z.infer<typeof Certification_Schema>;

export {
    ToolContents_Schema,
    Tool_Schema,
    ExperienceBaseContents_Schema,
    ExperienceContents_Schema,
    ExperienceBase_Schema,
    Experience_Schema,
    ArticleContents_Schema,
    Article_Schema,
    ClientContents_Schema,
    Client_Schema,
    ProjectBaseContents_Schema,
    ProjectContents_Schema,
    ProjectBase_Schema,
    Project_Schema,
    ServiceContents_Schema,
    Service_Schema,
    CertificationContents_Schema,
    Certification_Schema,
};
