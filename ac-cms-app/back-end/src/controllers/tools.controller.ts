import { Request, Response } from "express";
import {
    createTool,
    deleteTool,
    getTool,
    getTools,
    updateTool,
} from "../models";
import { ToolContents_Schema, Tool_Schema } from "../../../../shared/schemas";

export async function httpsGetTools(_req: Request, res: Response) {
    try {
        const results = await getTools();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function httpsGetTool(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (!id) {
        return res.status(400).json({
            message: "Bad request",
        });
    }

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid request parameters",
        });
    }

    try {
        const result = await getTool(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function httpsCreateTool(req: Request, res: Response) {
    const newTool = req.body;

    if (!newTool) {
        return res.status(400).json({
            message: "Bad request",
        });
    }

    const parsedNewTool = ToolContents_Schema.safeParse(newTool);

    if (parsedNewTool.error) {
        return res.status(400).json({
            message: parsedNewTool.error,
        });
    }

    try {
        const result = await createTool(parsedNewTool.data);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function httpsUpdateTool(req: Request, res: Response) {
    const newTool = req.body;

    if (!newTool) {
        return res.status(400).json({
            message: "Bad request",
        });
    }

    const parsedNewTool = Tool_Schema.safeParse(newTool);

    if (parsedNewTool.error) {
        return res.status(400).json({
            message: parsedNewTool.error,
        });
    }

    try {
        const result = await updateTool(parsedNewTool.data);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function httpsDeleteTool(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (!id) {
        return res.status(400).json({
            message: "Bad request",
        });
    }

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid request parameters",
        });
    }

    try {
        const result = await deleteTool(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}
