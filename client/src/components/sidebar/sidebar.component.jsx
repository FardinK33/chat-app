import React from "react";
import SearchInput from "./searchInput.component";
import Conversations from "./conversations.component";
import LogoutButton from "./logoutButton.component";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider py-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
