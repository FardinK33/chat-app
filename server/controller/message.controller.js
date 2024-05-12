import Message from "../model/message.model.js";
import Conversation from "../model/conversation.model.js";
import { getSocketId, io } from "../socket/socket.js";
// import { generateMessage } from "../bot/geminiConfiguration.js";
import { generateMessage } from "../server.js";

export const sendMessage = async (req, res) => {
  try {
    const message = req.body.message;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage);
    }

    await newMessage.save();

    let generatedMsg = null;
    if (receiverId === process.env.VITE_BOT_ID) {
      const generatedText = await generateMessage(message);
      generatedMsg = new Message({
        senderId: receiverId,
        receiverId: senderId,
        message: generatedText,
      });
      conversation.messages.push(generatedMsg);
      await generatedMsg.save();
    }

    await conversation.save();

    const receiverSocketId = getSocketId(receiverId);
    if (receiverSocketId)
      io.to(receiverSocketId).emit("newMessage", newMessage);

    const resArray = generatedMsg ? [newMessage, generatedMsg] : [newMessage];

    res.status(201).json(resArray);
  } catch (error) {
    console.log("Error in sendMessage Controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage  Controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
