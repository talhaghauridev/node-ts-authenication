import express from "express";
import router from "./routes/text.route";
const app = express();
const PORT = 6000;

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Server is perfect running ",
  });
});


app.use("/api/v1",router)

app.listen(PORT, () => {
  console.log(`Server is running is Port http://localhost:${PORT}`);
});
