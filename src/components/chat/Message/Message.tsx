import React, { useEffect } from "react";
import { deleteDoc, doc, runTransaction } from "firebase/firestore";
import { db } from "../../../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Parser } from "html-to-react";
import getHourAndTime from "../../../helpers/getHourAndTime";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";
import DeleteMessageButton from "./DeleteMessageButton";

type PropTypes = {
  message: any;
  selectedMessage: any;
  setSelectedMessage: React.Dispatch<React.SetStateAction<any>>
};

const Message: React.FC<PropTypes> = ({ message, selectedMessage, setSelectedMessage }) => {
  const { parse } = Parser();
  const user = useSelector((state: RootState) => state.user);

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  const deleteMessageHandler = async () => {
    await deleteDoc(doc(db, "chat_message", message.id));
  }

  const changeReactionHandler = async (reaction: string) => {
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "chat_message", message.id), {
        reaction
      })
    });
  }

  useEffect(() => {
    if (user.data?.email === message.to && !message.seen) {
      seenMessageHandler();
    }
  }, [user]);

  return (
    <>
      <div
        className={`flex relative ${user.data?.email !== message.from && "flex-row-reverse"
          } mt-1`}
      >
        <button
          onBlur={() => setSelectedMessage(null)}
          onFocus={() => setSelectedMessage(message)}
          className={`${user.data?.email === message.from
            ? "bg-blue-600 text-white hover:opacity-90"
            : "bg-white border hover:bg-gray-50"
            } ${selectedMessage?.id === message.id && "opacity-90"} ${user.data?.email === message.from && selectedMessage?.id === message.id && "rounded-e-none"}
             w-fit max-w-[400px] min-w-32 shadow-sm p-3 text-[0.925em] z-30 rounded-lg text-start transition-all font-light font-Vazir relative`}
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
          <ReactionsEmojiPicker callback={(e) => changeReactionHandler(`<img src="${e.getImageUrl()}" style="display:inline;width:1.25em;height:1.25em" />`)}
            message={message} selectedMessage={selectedMessage} />
        </button>
        {
          message.reaction && (
            <button className={`flex items-end top-0 bottom-0 z-20 mx-1`}
              onClick={() => changeReactionHandler("")}>
              <div className="size-8 border flex items-center justify-center bg-white rounded-full">
                {parse(message.reaction)}
              </div>
            </button>
          )
        }
        <DeleteMessageButton callback={deleteMessageHandler} message={message} selectedMessage={selectedMessage} />
      </div>
    </>
  );
};

export default Message;
