import * as z from "zod";

import { urlMediaValidationConfig } from "../utils";

export const SkillModel_R = z.object({
    id: z.uuidv6(),
    title: z.string().max(255).min(3),
    description: z.string().max(255).min(10),
    iconUrl: z.url(urlMediaValidationConfig),
    iconAlt: z.string().max(255),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
});

export const SkillModel_W = SkillModel_R.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export type Skill_R = z.infer<typeof SkillModel_R>;
export type Skill_W = z.infer<typeof SkillModel_W>;
