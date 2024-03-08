import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectDB.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser());

app.get("/api/auth", authRoutes);
app.get("/api/messages", messageRoutes);
app.get("/api/users", users);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}/`);
});
