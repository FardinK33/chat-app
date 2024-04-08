import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversations";
import MessageInput from "./messageInput.component";
import Messages from "./messages.component";
import { TiMessageTyping } from "react-icons/ti";

const Chat = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation?.name ? (
        <>
          <div className="bg-purple-complimentry bg-opacity-50 px-4 py-3 mb-2">
            <span className="text-gray-200 font-bold">
              {selectedConversation.name}
            </span>
          </div>

          {selectedConversation && <Messages />}

          <MessageInput />
        </>
      ) : (
        <LayoutLoader />
      )}
    </div>
  );
};

export default Chat;

const LayoutLoader = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.name} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessageTyping className="text-2xl w-16 md:text-6xl text-center" />
      </div>
    </div>
  );
};
