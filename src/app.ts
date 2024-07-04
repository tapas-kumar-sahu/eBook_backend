import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to eBook apis!" });
});

app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
