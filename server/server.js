import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { app, httpServer } from "./socket/socket.js";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectDB.js";
import messageRoutes from "./routes/message.routes.js";
import users from "./routes/users.routes.js";

const PORT = process.env.PORT || 3000;
dotenv.config();

const apiKey = process.env.BOT_API;
const genAI = new GoogleGenerativeAI(apiKey);

export async function generateMessage(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const prompt = "Write a story about a magic backpack."
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", users);

httpServer.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}/`);
});
