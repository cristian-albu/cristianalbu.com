import z from "zod";
import { client } from "../constants";

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
        [client.client_id]: z.number().positive(),
    })
);
