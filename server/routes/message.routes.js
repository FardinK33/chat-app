import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getMessage, sendMessage } from "../controller/message.controller";

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
