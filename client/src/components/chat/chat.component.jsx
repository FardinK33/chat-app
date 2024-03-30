import MessageInput from "./messageInput.component";
import Messages from "./messages.component";
import { TiMessageTyping } from "react-icons/ti";

const Chat = () => {
  const chatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatSelected ? (
        <>
          <div className="bg-purple-complimentry bg-opacity-50 px-4 py-3 mb-2">
            <span className="text-gray-200 font-bold">John Doe</span>
          </div>

          <Messages />

          <MessageInput />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 John Doe ❄</p>
            <p>Select a chat to start messaging</p>
            <TiMessageTyping className="text-2xl w-16 md:text-6xl text-center" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
