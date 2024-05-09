import https from "https";
import fs from "fs";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 7000;

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
