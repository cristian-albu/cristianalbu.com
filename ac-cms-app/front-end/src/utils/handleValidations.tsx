import { ZodIntersection, ZodObject, ZodRawShape } from "zod";

export default function handleValidations<T>(
    obj: T,
    schema:
        | ZodObject<ZodRawShape>
        | ZodIntersection<ZodObject<ZodRawShape>, ZodObject<ZodRawShape>>
) {
    const parsedObj = schema.safeParse(obj);
    console.log(obj);
    if (parsedObj.error) {
        return parsedObj.error.issues.map((err) => ({
            text: err.message,
            key: err.path,
        }));
    } else {
        return null;
    }
}
