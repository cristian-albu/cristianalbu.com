import { T_TextInput } from "../components/text-input";

export function buildFormInputsFromSchema<
    ResouceType extends Record<string, unknown>
>(resource: ResouceType): T_TextInput[] {
    return Object.values(resource).map((val) => {
        let label: string = "";
        let type: string = "text";
        let defaultValue: string | number = "";

        if (typeof val === "string") {
            label = val;
        }

        if (typeof val === "object" && val !== null) {
            if ("label" in val && typeof val.label === "string") {
                label = val.label;
            }

            if ("type" in val && typeof val.type === "string") {
                type = val.type;
            }

            if (
                "options" in val &&
                Array.isArray(val.options) &&
                typeof val.options[0] === "string"
            ) {
                defaultValue = val.options[0];
            }
        }

        return {
            label,
            type,
            children: label,
            defaultValue,
        };
    });
}

export function buildFormInputsFromItem<
    ResourceType extends Record<string, string | number>
>(item: ResourceType): T_TextInput[] {
    const shape = Object.entries(item).map(([key, val]) => {
        return { label: key, type: "text", children: key, defaultValue: val };
    });

    return shape;
}
