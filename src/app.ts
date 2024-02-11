import express from "express";
import router from "./routes/text.route";
import userRouter from "./routes/user.route";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware";
config({
  path: "./.env",
});

const app = express();
app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1/user", userRouter);

// Middlewares
app.use(errorMiddleware);

export default app;
