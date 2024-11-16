import React, { useEffect } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../../helpers/firebase";
import { RootState } from "../../../redux/store";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import AudioMessage from "./AudioMessage";
import { useAppSelector } from "../../../redux/hooks";
import MessageReaction from "./MessageReaction";

type PropTypes = {
  message: any;
  scrollDown: () => void;
};

const Message: React.FC<PropTypes> = ({ message, scrollDown }) => {
  const user = useAppSelector((state: RootState) => state.user);

  const messageIsForCurrentUser = user.data?.email === message.from;

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  useEffect(() => {
    if (user.data?.email === message.to && !message.seen) {
      seenMessageHandler();
    }
  }, [user]);

  return (
    <div
      className={`flex relative ${!messageIsForCurrentUser ? "flex-row-reverse" : ""} mt-2`}>
      <div className={`lg:max-w-none max-w-[90%] flex ${!messageIsForCurrentUser ? "flex-row-reverse" : ""}`}>
        {
          message.type === "image" && <ImageMessage key={message.id} message={message} scrollDown={scrollDown} />
        }
        {
          message.type === "video" && <VideoMessage key={message.id} message={message} scrollDown={scrollDown} />
        }
        {
          message.type === "file" && <FileMessage key={message.id} message={message} />
        }
        {
          message.type === "audio" && <AudioMessage key={message.id} message={message} />
        }
        {
          message.type === "text" &&
          <TextMessage key={message.id} message={message} />
        }
      </div>
      <MessageReaction message={message} />
    </div>
  );
};

export default Message;
