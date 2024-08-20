import mongoose from "mongoose";
import "./env.config.js";

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(dbURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));
};

export default connectDB;
