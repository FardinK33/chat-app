import React from "react";
import useConversation from "../../zustand/useConversations";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ senderId, message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  const isMe = authUser._id === senderId;
  const profileImg = isMe
    ? authUser.profilePic
    : selectedConversation.profilePic;

  // const exactTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${isMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profileImg} />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          isMe ? "bg-[#8B93FF]" : "bg-[#D6589F]"
        } text-white`}
      >
        {message}
      </div>
      {/* <div className="chat-footer text-xs flex gap-1 items-center text-gray-300 px-3 py-1">
        {exactTime}
      </div> */}
    </div>
  );
};

export default Message;
