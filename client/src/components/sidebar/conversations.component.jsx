import useGetUsers from "../../hooks/useGetUsers";
import ChatUser from "./chatUser.component";

const Conversations = () => {
  const { loading, conversations } = useGetUsers();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((user) => (
        <ChatUser user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Conversations;
