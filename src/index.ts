import app from "./app";
const PORT = process.env.PORT || 6000;

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Server is perfect running ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running is Port http://localhost:${PORT}`);
});
