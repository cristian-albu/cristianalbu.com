import z from "zod";
import { service } from "../constants";

export const ServiceContents_Schema = z.object({
    [service.title.label]: z.string().max(service.title.max),
    [service.description.label]: z.string().max(service.description.max),
    [service.image]: z.string().url(),
    [service.content.label]: z.string().max(service.content.max),
    [service.starting_price]: z.number(),
});

export const Service_Schema = ServiceContents_Schema.and(
    z.object({
        [service.service_id]: z.number().positive(),
    })
);
