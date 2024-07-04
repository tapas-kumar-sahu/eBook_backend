import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to eBook apis!" });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
