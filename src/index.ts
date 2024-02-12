import app from "./app";
import connectDB from "./db";
const PORT = process.env.PORT || 6000;

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Server is perfect running ",
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running is Port http://localhost:${PORT}`);
  });
});


export default app;