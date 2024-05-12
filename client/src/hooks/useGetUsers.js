import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversations";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
        setFilteredUsers(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const filterUsers = (searchedUser) => {
    const filtered = conversations.filter((user) =>
      user.name.toLowerCase().includes(searchedUser.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return { loading, filterUsers, filteredUsers };
};

export default useGetUsers;
