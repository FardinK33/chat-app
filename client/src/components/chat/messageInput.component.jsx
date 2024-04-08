import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handlesubmit = async (e) => {
    e.preventDefault();

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="p-2" onSubmit={handlesubmit}>
      <label className="input flex items-center gap-2 text-gray-200 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 focus:bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
        <input
          type="text"
          className="grow"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {loading ? (
          <button>
            <span className="loading loading-spinner"></span>
          </button>
        ) : (
          <button type="submit">
            <IoMdSend className="w-5 h-5" />
          </button>
        )}
      </label>
    </form>
  );
};

export default MessageInput;
