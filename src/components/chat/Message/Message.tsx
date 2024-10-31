import React, { useEffect } from "react";
import { deleteDoc, doc, runTransaction } from "firebase/firestore";
import { db } from "../../../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Parser } from "html-to-react";
import getHourAndTime from "../../../helpers/getHourAndTime";
import { EmojiClickData } from "emoji-picker-react";
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

  const reactionToMessageHandler = async (e: EmojiClickData) => {
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "chat_message", message.id), {
        reaction: `<img src="${e.getImageUrl()}" style="display:inline;width:1.25em;height:1.25em" />`
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
        className={`flex relative ${user.data?.email !== message.from && "justify-end"
          } mt-1`}
      >
        <button
          onBlur={() => setSelectedMessage(null)}
          onFocus={() => setSelectedMessage(message)}
          className={`${user.data?.email === message.from
            ? "bg-blue-600 text-white hover:opacity-90"
            : "bg-white border hover:bg-gray-50"
            } ${selectedMessage?.id === message.id && "opacity-90"} ${user.data?.email === message.from && selectedMessage?.id === message.id && "rounded-e-none"}
             w-fit max-w-[400px] min-w-32 shadow-sm p-3 z-10 text-[0.925em] rounded-lg text-start transition-all font-light font-Vazir relative`}
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
          {
            message.reaction && (
              <div className={`absolute ${message.from === user.data?.email ? "right-[-1.35rem]" : "left-[-1.35rem]"} flex items-end top-0 bottom-0`}>
                <div className="size-8 border flex items-center justify-center bg-white rounded-full">
                  {parse(message.reaction)}
                </div>
              </div>
            )
          }
          <ReactionsEmojiPicker callback={reactionToMessageHandler} message={message} selectedMessage={selectedMessage} />
        </button>
        <DeleteMessageButton callback={deleteMessageHandler} message={message} selectedMessage={selectedMessage} />
      </div>
    </>
  );
};

export default Message;
