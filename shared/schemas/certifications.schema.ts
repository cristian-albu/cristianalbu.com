import z from "zod";
import { certification, tables } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed and the client is just a reference
 */
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
        [certification.certification_id]: z.number().positive().int(),
    })
);

export const Certifications = `--sql
CREATE TABLE ${tables.certification}(
        ${certification.certification_id} SERIAL PRIMARY KEY,
        ${certification.title.label} VARCHAR(${certification.title.max}) NOT NULL,
        ${certification.issuer.label} VARCHAR(${certification.issuer.max}) NOT NULL,
        ${certification.description.label} VARCHAR(${certification.description.max}) NOT NULL,
        ${certification.image} VARCHAR(255) NOT NULL,
        ${certification.link} VARCHAR(255) NOT NULL
);`;
