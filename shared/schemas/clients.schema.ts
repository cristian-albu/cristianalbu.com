import z from "zod";
import { client, tables } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed and the client is just a reference
 */
export const ClientContents_Schema = z.object({
    [client.name.label]: z.string().max(client.name.max),
    [client.description.label]: z.string().max(client.description.max),
    [client.image]: z.string().url(),
    [client.client_link]: z.string().url(),
    [client.testimonial.label]: z.string().max(client.testimonial.max),
    [client.testimonial_representative.label]: z
        .string()
        .max(client.testimonial_representative.max),
    [client.testimonial_representative_image]: z.string().url(),
});

export const Client_Schema = ClientContents_Schema.and(
    z.object({
        [client.client_id]: z.number().positive().int(),
    })
);

export const Clients = `--sql
CREATE TABLE ${tables.client}(
        ${client.client_id} SERIAL PRIMARY KEY,
        ${client.name.label} VARCHAR(${client.name.max}) NOT NULL,
        ${client.description.label} VARCHAR(${client.description.max}) NOT NULL,
        ${client.client_link} VARCHAR(255) NOT NULL,
        ${client.testimonial.label} VARCHAR(${client.testimonial.max}),
        ${client.testimonial_representative.label} VARCHAR(${client.testimonial_representative.max}),
        ${client.testimonial_representative_image} VARCHAR(255),
);`;
