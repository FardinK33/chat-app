import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState();
  const { setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation != null) getMessages();
  }, [selectedConversation]);
  return { loading };
};

export default useGetMessages;
