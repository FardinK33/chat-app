import React from "react";
import useConversation from "../../zustand/useConversations";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const ChatUser = ({ user }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation, setMessages } =
    useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const handleChange = () => {
    if (!selectedConversation || selectedConversation._id !== user._id) {
      setSelectedConversation(user);
      setMessages([]);
    } else {
      setSelectedConversation(null);
      setMessages([]);
    }
  };

  return (
    <div className="pb-1" onClick={handleChange}>
      <div
        className={`flex gap-2 items-center hover:bg-purple-complimentry hover:bg-opacity-50 rounded p-2 py-1 cursor-pointer ${
          selectedConversation?._id === user._id ? "bg-purple-complimentry" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={user.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-gray-200">
              {user.name} {user._id === authUser._id && "(You)"}
            </p>
            <span className="text-xl">😉</span>
          </div>
        </div>
      </div>

      <div className="divider py-0 my-0 h-2"></div>
    </div>
  );
};

export default ChatUser;
