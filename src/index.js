import express from "express";
const app = express();
const PORT = 6000;

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Server is perfect running ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running is Port http://localhost:${PORT}`);
});
