import express from "express";
import {
    httpsGetTools,
    httpsGetTool,
    httpsCreateTool,
    httpsUpdateTool,
    httpsDeleteTool,
} from "../controllers";

const toolsRouter = express.Router();

toolsRouter.get("/", httpsGetTools);
toolsRouter.get("/:id", httpsGetTool);
toolsRouter.post("/", httpsCreateTool);
toolsRouter.put("/:id", httpsUpdateTool);
toolsRouter.delete("/:id", httpsDeleteTool);

export default toolsRouter;
