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
      {!loading ? (
        filteredUsers?.map((user) => <ChatUser user={user} key={user._id} />)
      ) : (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Conversations;
