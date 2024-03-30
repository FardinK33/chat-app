import React from "react";
import Chat from "../components/chat/chat.component";
import Sidebar from "../components/sidebar/sidebar.component";

const Homepage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-purple-light-bg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Homepage;
