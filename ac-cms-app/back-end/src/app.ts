import express from "express";
import cors from "cors";
import toolsRouter from "./routes/tools.router";

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    })
);

app.use("/api/tools", toolsRouter);

export default app;
