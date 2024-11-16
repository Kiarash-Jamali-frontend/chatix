import React, { useEffect } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../../helpers/firebase";
import { RootState } from "../../../redux/store";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import AudioMessage from "./AudioMessage";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import MessageReaction from "./MessageReaction";
import { changeMessageSelectedForReply } from "../../../redux/slices/messageSelectedForReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

type PropTypes = {
  message: any;
  scrollDown: () => void;
  replyedMessage: any;
};

const Message: React.FC<PropTypes> = ({ message, scrollDown, replyedMessage }) => {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const messageIsForCurrentUser = user.data?.email === message.from;

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  const selectMessageForReply = () => {
    dispatch(changeMessageSelectedForReply(message));
  }

  const scrollToMessageHandler = () => {
    document.getElementById(replyedMessage.id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
    const params = new URLSearchParams();
    params.set("message", replyedMessage.id);
    navigate(`?${params.toString()}`);
  }

  const urlParams = () => {
    const params = new URLSearchParams(location.search);
    return params;
  }

  useEffect(() => {
    if (user.data?.email === message.to && !message.seen) {
      seenMessageHandler();
    }
  }, [user]);

  useEffect(() => {
    let removeMessageURLParamHandler = null;
    const params = urlParams();
    if (params.get("message") === message.id) {
      removeMessageURLParamHandler = setTimeout(() => {
        params.delete("message");
        navigate(`?${params.toString()}`);
      }, 1000);
    }

    return () => {
      removeMessageURLParamHandler &&
        clearTimeout(removeMessageURLParamHandler);
    }
  }, [location.search]);

  return (
    <div id={message.id}
      className={`flex relative ${!messageIsForCurrentUser ? "flex-row-reverse" : ""} transition-all rounded-lg mt-1 ${message.id === urlParams().get("message") ? "bg-gray-500/10" : ""}`} onDoubleClick={selectMessageForReply}>
      <div className={`lg:max-w-none max-w-[90%] flex flex-col rounded-lg overflow-hidden border ${!messageIsForCurrentUser ? "flex-row-reverse" : ""}`}>
        {
          replyedMessage && (
            <button onClick={scrollToMessageHandler}
              className="bg-gradient-to-tr p-2 flex flex-col from-gray-600 to-gray-900 text-white">
              <span className="text-sm font-medium">
                <FontAwesomeIcon icon={faReply} className="rotate-180 me-1" />
                {replyedMessage.sender.name}
              </span>
              <p className="text-xs mt-1">
                {replyedMessage.content}
              </p>
            </button>
          )
        }
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
