import express from "express";
import router from "./routes/text.route";
const app = express();

app.use("/api/v1", router);

export default app;
