import React, { useEffect } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { RootState } from "../../redux/store";
import ImageMessage from "./ImageMessage";
import VideoMessage from "./VideoMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import AudioMessage from "./AudioMessage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MessageReaction from "./MessageReaction";
import { changeMessageSelectedForReply } from "../../redux/slices/messageSelectedForReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Parser } from "html-to-react";
import Profile from "../../types/Profile";
import GradiantProfile from "../GradiantProfile";

type PropTypes = {
  message: any;
  scrollDown: () => void;
  replyedMessage: any;
  senderProfile?: Profile & {
    id: string
  };
  isGroupMessage?: boolean;
};

const Message: React.FC<PropTypes> = ({ message, scrollDown, replyedMessage, isGroupMessage, senderProfile }) => {
  const { parse } = Parser();
  const user = useAppSelector((state: RootState) => state.user);
  const chatsList = useAppSelector((state: RootState) => state.chats.list);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const messageIsForCurrentUser = user.data?.email === message.from;

  const chatIsCreated = isGroupMessage && chatsList.find((c) => c.email === message.from);

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
      className={`flex relative ${messageIsForCurrentUser ? "flex-row-reverse" : ""} transition-all rounded-xl mt-1 ${message.id === urlParams().get("message") ? "bg-gray-500/5" : ""}`}
      onDoubleClick={selectMessageForReply}>
      {
        isGroupMessage && message.from != user.data?.email && senderProfile && (
          <Link to={chatIsCreated ? `/chat/${message.from}` : `/create-chat?email=${message.from}`}
            className={`mt-auto ms-2`}>
            {
              senderProfile?.photoUrl ? (
                <img src={senderProfile?.photoUrl} className="size-10 object-cover rounded-full object-center" />
              ) : (
                <GradiantProfile name={senderProfile?.name} size="sm" />
              )
            }
          </Link>
        )
      }
      <div className={`lg:max-w-none max-w-[90%] flex flex-col font-Vazir ${messageIsForCurrentUser ? "flex-row-reverse" : ""}`}>
        {
          replyedMessage && (
            <button onClick={scrollToMessageHandler}
              className="bg-gradient-to-tr p-2 flex rounded-t-xl flex-col items-start shrink from-gray-600 to-gray-900 text-white">
              <span className="text-sm font-medium">
                <FontAwesomeIcon icon={faReply} className="rotate-180 me-1" />
                {replyedMessage.sender.name}
              </span>
              <p className="text-xs mt-1 text-start" dir="auto">
                {
                  replyedMessage.type !== "text" ? <span className="capitalize">{replyedMessage.type}</span> : (
                    parse(replyedMessage.content.split("<br>").join(""))
                  )
                }
              </p>
            </button>
          )
        }
        {
          message.type === "image" && <ImageMessage key={message.id}
            replayMessage={replyedMessage} message={message} isGroupMessage={isGroupMessage}
            senderProfile={senderProfile}
            scrollDown={scrollDown} />
        }
        {
          message.type === "video" && <VideoMessage key={message.id}
            replayMessage={replyedMessage} message={message} isGroupMessage={isGroupMessage}
            senderProfile={senderProfile}
            scrollDown={scrollDown} />
        }
        {
          message.type === "file" && <FileMessage key={message.id}
            replayMessage={replyedMessage} message={message} isGroupMessage={isGroupMessage}
            senderProfile={senderProfile} />
        }
        {
          message.type === "audio" && <AudioMessage
            replayMessage={replyedMessage} key={message.id} message={message} isGroupMessage={isGroupMessage}
            senderProfile={senderProfile} />
        }
        {
          message.type === "text" &&
          <TextMessage replayMessage={replyedMessage} key={message.id} message={message} isGroupMessage={isGroupMessage} senderProfile={senderProfile} />
        }
      </div>
      {
        !isGroupMessage && (
          <MessageReaction message={message} />
        )
      }
    </div>
  );
};

export default Message;
