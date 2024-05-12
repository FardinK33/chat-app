import React, { useEffect, useState } from "react";
import SearchInput from "./searchInput.component";
import Conversations from "./conversations.component";
import LogoutButton from "./logoutButton.component";
import useGetUsers from "../../hooks/useGetUsers";

const Sidebar = () => {
  const [findUser, setFindUser] = useState("");
  // const { filteredUsers, filterUsers } = useGetUsers();

  const handleChange = (e) => {
    setFindUser(e.target.value);
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput searchUser={findUser} handleChange={handleChange} />
      <div className="divider py-3" />
      <Conversations findUser={findUser} />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
