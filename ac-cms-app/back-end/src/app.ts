import express from "express";
import toolsRouter from "./routes/tools.router";

const app = express();

app.use(express.json());

app.use("/tools", toolsRouter);

export default app;
