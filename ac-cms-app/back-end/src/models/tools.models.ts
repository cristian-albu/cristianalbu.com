import { tables, tool } from "../../../../shared/constants";
import { T_Tool, T_ToolContents } from "../../../../shared/schemas";
import { createRow, deleteRow, getRow, getRows, updateRow } from "./requests";

export async function getTools() {
    try {
        const results = await getRows<T_Tool>(tables.tools);
        return results;
    } catch (error) {
        throw error;
    }
}

export async function getTool(id: number) {
    try {
        const result = await getRow<T_Tool>(tables.tools, tool.tool_id, id);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function createTool(newTool: T_ToolContents) {
    const keys: string[] = Object.keys(newTool);
    const values = Object.values(newTool);

    try {
        const result = await createRow<T_Tool>(tables.tools, keys, values);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function updateTool(newTool: T_Tool) {
    const { [tool.tool_id]: id, ...toolContents } = newTool;
    const keys: string[] = Object.keys(toolContents);
    const values = Object.values(toolContents);
    try {
        const result = await updateRow<T_Tool>(
            tables.tools,
            keys,
            values,
            tool.tool_id,
            id
        );
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteTool(id: number) {
    try {
        const result = await deleteRow(tables.tools, tool.tool_id, id);
        return result;
    } catch (error) {
        throw error;
    }
}
