import React, { useState } from "react";
import button from "../../cva/button";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

type PropTypes = {
  email: string;
};

const ChatInput: React.FC<PropTypes> = ({ email }) => {
  const userEmail = useSelector((state: RootState) => state.user.data!.email);
  const [messageText, setMessageText] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);

  const sendMessageHandler = async () => {
    setPending(true);
    setMessageText("");
    await addDoc(collection(db, "chat_message"), {
      content: messageText,
      from: userEmail,
      seen: false,
      timestamp: Timestamp.fromDate(new Date()),
      to: email,
      type: "text",
    });
    setPending(false);
  };

  return (
    <div className="mt-auto pb-5">
      <div className="p-3 shadow-sm rounded-full border bg-white flex">
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
            className: `${pending && "pointer-events-none opacity-70"} !rounded-full`,
          })}
          onClick={sendMessageHandler}
        >
          Send
          <FontAwesomeIcon icon={faPaperPlane} className="ms-1.5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
