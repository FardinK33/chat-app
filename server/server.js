import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectDB.js";
import messageRoutes from "./routes/message.routes.js";
import users from "./routes/users.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Server is Working");
// });
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", users);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}/`);
});
