import Message from "./message.component";

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message position="chat-start" />
      <Message color="#05bbaa" position="chat-end" />
      <Message position="chat-start" />
      <Message position="chat-start" />
      <Message position="chat-end" />
      <Message position="chat-end" />
      <Message position="chat-start" />
      <Message position="chat-start" />
      <Message position="chat-end" />
      <Message position="chat-end" />
      <Message position="chat-start" />
    </div>
  );
};

export default Messages;
