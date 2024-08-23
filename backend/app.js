import express from "express";
import connectDB from "./config/db.config.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is on port ", PORT);
});
