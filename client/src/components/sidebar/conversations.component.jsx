import { useEffect } from "react";
import useGetUsers from "../../hooks/useGetUsers";
import ChatUser from "./chatUser.component";

const Conversations = ({ findUser }) => {
  const { loading } = useGetUsers();
  const { filteredUsers, filterUsers } = useGetUsers();

  useEffect(() => {
    filterUsers(findUser);
  }, [findUser]);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {filteredUsers?.map((user) => (
        <ChatUser user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Conversations;
