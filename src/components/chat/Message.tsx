import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  message: any;
};

const Message: React.FC<PropTypes> = ({ message }) => {
  const user = useContext(UserContext);

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  useEffect(() => {
    if (user && user !== "loading" && user.phoneNumber === message.to) {
      seenMessageHandler();
    }
  }, [user]);

  if (user && user !== "loading") {
    return (
      <>
        <div
          className={`flex ${
            user.phoneNumber !== message.from && "justify-end"
          } mt-1`}
        >
          <div
            className={`${
              user.phoneNumber === message.from
                ? "bg-blue-600 text-white"
                : "bg-white border"
            } w-fit max-w-[400px] min-w-32 shadow-sm p-3 text-sm rounded-lg`}
          >
            {message.content}
            <div className="mt-1 flex justify-end">
              <div
                className={`text-xs ${
                  user.phoneNumber === message.from
                    ? "text-white/50"
                    : "text-black/50"
                }`}
              >
                {`${new Date(
                  message.timestamp.seconds * 1000
                ).getHours()}:${new Date(
                  message.timestamp.seconds * 1000
                ).getMinutes()}`}
              </div>
              {message.from === user.phoneNumber && (
                <div className="translate-y-[-1px] ms-1">
                {message.seen && (
                  <FontAwesomeIcon icon={faCheck} width={10} height={10} className="translate-x-[5px] text-white" />
                )}
                  <FontAwesomeIcon icon={faCheck} width={10} height={10} />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Message;
