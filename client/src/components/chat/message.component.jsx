import React from "react";

const Message = ({ position, color = "#D6589F" }) => {
  return (
    <div className={`chat ${position}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className={`chat-bubble bg-[#8B93FF] text-white`}>
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="chat-footer text-xs flex gap-1 items-center text-gray-300 px-3 py-1">
        12:00
      </div>
    </div>
  );
};

export default Message;
