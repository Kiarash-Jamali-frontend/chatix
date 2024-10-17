import React, { useContext, useState } from "react";
import button from "../../cva/button";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { UserContext } from "../../contexts/UserProvider";

type PropTypes = {
  email: string;
};

const ChatInput: React.FC<PropTypes> = ({ email }) => {
  const user = useContext(UserContext);
  const [messageText, setMessageText] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);

  const sendMessageHandler = async () => {
    setPending(true);
    if (user && user !== "loading") {
      setMessageText("");
      await addDoc(collection(db, "chat_message"), {
        content: messageText,
        from: user.email,
        seen: false,
        timestamp: Timestamp.fromDate(new Date()),
        to: email,
        type: "text",
      });
    }
    setPending(false);
  };

  return (
    <div className="mt-auto pb-5">
      <div className="p-3 shadow-sm rounded-xl border bg-white flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="focus:outline-none w-full max-w-none"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button
          className={button({
            intent: "dark",
            className: pending && "pointer-events-none opacity-70",
          })}
          onClick={sendMessageHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
