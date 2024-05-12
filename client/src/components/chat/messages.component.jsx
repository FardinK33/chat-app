import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../zustand/useConversations";
import Message from "./message.component";

const Messages = () => {
  const { loading } = useGetMessages();
  const { messages } = useConversation();
  const lastMsg = useRef();

  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMsg.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMsg}>
            <Message senderId={message.senderId} message={message.message} />
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Send a message to Start Conversation</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
