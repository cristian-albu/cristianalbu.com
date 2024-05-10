import { ZodObject, ZodRawShape } from "zod";

export default function handleValidations<T>(
    obj: T,
    schema: ZodObject<ZodRawShape>
) {
    const parsedObj = schema.safeParse(obj);

    if (parsedObj.error) {
        return parsedObj.error.issues.map((err) => ({
            text: err.message,
            key: err.path,
        }));
    } else {
        return null;
    }
}
