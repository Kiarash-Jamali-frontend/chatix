import React, { useEffect } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Parser } from "html-to-react";
import getHourAndTime from "../../helpers/getHourAndTime";

type PropTypes = {
  message: any;
};

const Message: React.FC<PropTypes> = ({ message }) => {
  const { parse } = Parser();
  const user = useSelector((state: RootState) => state.user);

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  useEffect(() => {
    if (user.data?.email !== message.to && !message.seen) {
      seenMessageHandler();
    }
  }, [user]);

  return (
    <>
      <div
        className={`flex ${user.data?.email !== message.from && "justify-end"
          } mt-1`}
      >
        <div
          className={`${user.data?.email === message.from
            ? "bg-blue-600 text-white"
            : "bg-white border"
            } w-fit max-w-[400px] min-w-32 shadow-sm p-3 text-sm rounded-lg`}
        >
          {parse(message.content)}
          <div className="mt-1 flex justify-end">
            <div
              className={`text-xs ${user.data?.email === message.from
                ? "text-white/50"
                : "text-black/50"
                }`}
            >
              {getHourAndTime(message.timestamp)}
            </div>
            {message.from === user.data?.email && (
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
};

export default Message;
