import z from "zod";
import { certification } from "../constants";

export const CertificationContents_Schema = z.object({
    [certification.title.label]: z.string().max(certification.title.max),
    [certification.issuer.label]: z.string().max(certification.issuer.max),
    [certification.description.label]: z
        .string()
        .max(certification.description.max),
    [certification.image]: z.string().url(),
    [certification.link]: z.string().url(),
});

export const Certification_Schema = CertificationContents_Schema.and(
    z.object({
        [certification.certification_id]: z.number().positive(),
    })
);
