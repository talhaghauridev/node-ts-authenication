import express from "express";
import router from "./routes/text.route";
import userRouter from "./routes/user.route";
const app = express();
app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1/user", userRouter);

export default app;
