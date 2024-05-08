import z from "zod";
import { service, tables } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed
 */
export const ServiceContents_Schema = z.object({
    [service.title.label]: z.string().max(service.title.max),
    [service.description.label]: z.string().max(service.description.max),
    [service.image]: z.string().url(),
    [service.content.label]: z.string().max(service.content.max),
    [service.starting_price]: z.number().int(),
});

export const Service_Schema = ServiceContents_Schema.and(
    z.object({
        [service.service_id]: z.number().positive().int(),
    })
);

export const Services = `--sql
CREATE TABLE ${tables.service}(
        ${service.service_id} SERIAL PRIMARY KEY,
        ${service.title.label} VARCHAR(${service.title.max}) NOT NULL,
        ${service.description.label} VARCHAR(${service.description.max}) NOT NULL,
        ${service.image} VARCHAR(255) NOT NULL,
        ${service.content.label} JSON NOT NULL,
        ${service.starting_price} INTEGER NOT NULL
);`;
