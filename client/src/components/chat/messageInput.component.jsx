import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="p-2">
      <label className="input flex items-center gap-2 text-gray-200 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 focus:bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
        <input type="text" className="grow" placeholder="Search" />
        <button type="submit">
          <IoMdSend className="w-5 h-5" />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
