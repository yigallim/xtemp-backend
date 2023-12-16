import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.json());
const server = http.createServer(app);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URI);
mongoose.connection.on("error", (error) => {
    console.log("\n\n[SERVER] -- Error connecting database.");
    console.log(error + "\n\n");
});
mongoose.connection.on("connected", () => {
    console.log("\n\n[SERVER] -- Connected to database successfully.");
    server.listen(3001);
    console.log("[SERVER] -- Server listening to port 3001...\n\n");
});
//# sourceMappingURL=index.js.map