import React, { useEffect, useState } from "react";
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
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import { useEncryption } from "../../hooks/useEncryption";
import { decryptMessage, isEncryptedMessage } from "../../utils/crypto";

type PropTypes = {
  message: any;
  scrollDown: () => void;
  replyedMessage: any;
  senderProfile?: Profile & {
    id: string
  };
  isGroupMessage?: boolean;
  nextMessageSender?: string | null;
};

const Message: React.FC<PropTypes> = ({ message, scrollDown, replyedMessage, isGroupMessage = false, senderProfile, nextMessageSender }) => {
  const { parse } = Parser();
  const user = useAppSelector((state: RootState) => state.user);
  const chatsList = useAppSelector((state: RootState) => state.chats.list);
  const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { getChatSecret } = useEncryption();
  const [decryptedContent, setDecryptedContent] = useState<string>("");
  const [decryptedReplayedMessageContent, setDecryptedReplayedMessageContent] = useState<string>("");

  const messageIsForCurrentUser = user.data?.email === message.from;

  const chatIsCreated = isGroupMessage && chatsList.find((c) => c.email === message.from);

  const seenMessageHandler = async () => {
    const msgDocRef = doc(db, "chat_message", message.id);
    await runTransaction(db, async (transaction) => {
      transaction.update(msgDocRef, { seen: true });
    });
  };

  const handleDecryption = async (msg: any, isGroupMsg: boolean): Promise<string> => {
    if (isEncryptedMessage(msg) && !isGroupMsg) {
      try {
        const chatSecret = getChatSecret(msg.from, msg.to);
        const decrypted = await decryptMessage(
          {
            encryptedContent: msg.encryptedContent,
            iv: msg.iv,
            salt: msg.salt
          },
          chatSecret
        );
        return decrypted;
      } catch (error) {
        console.error('Failed to decrypt message:', error);
        return '[Encrypted Message - Unable to decrypt]';
      }
    } else {
      // For non-encrypted messages or group messages, use original content
      return msg.content || '';
    }
  };

  const handleDecryptionMessage = async () => {
    const decrypted = await handleDecryption(message, isGroupMessage);
    setDecryptedContent(decrypted);
  }

  const handleDecryptionReplyedMessage = async () => {
    const decrypted = await handleDecryption(replyedMessage, isGroupMessage);
    setDecryptedReplayedMessageContent(decrypted);
  }

  const selectMessageForReply = () => {
    if (isGroupMessage && senderProfile) {
      dispatch(changeMessageSelectedForReply({ ...message, senderName: senderProfile.name }));
    }
    if (!isGroupMessage) {
      dispatch(changeMessageSelectedForReply({ ...message, content: decryptedContent }));
    }
  }

  const scrollToMessageHandler = () => {
    // document.getElementById(replyedMessage.id)?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "center",
    //   inline: "center"
    // });
    const replayedMessageOffsetTop = document.getElementById(replyedMessage.id)?.offsetTop;
    const messagesList = document.getElementById("messagesList");
    if (replayedMessageOffsetTop && messagesList) {
      messagesList.scroll(0, replayedMessageOffsetTop - document.documentElement.offsetHeight / 2);
    }
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

  // Handle decryption of encrypted messages
  useEffect(() => {
    handleDecryptionMessage();
  }, [message, isGroupMessage, getChatSecret]);

  useEffect(() => {
    if (replyedMessage) {
      handleDecryptionReplyedMessage();
    }
  }, [replyedMessage, isGroupMessage, getChatSecret]);

  if ((decryptedContent && !replyedMessage) || (decryptedContent && replyedMessage && decryptedReplayedMessageContent)) {
    return (
      <div id={message.id}
        className={`flex relative ${messageIsForCurrentUser ? "flex-row-reverse" : ""} ${(selectedMessage?.id == message.id && !isGroupMessage) ? "z-50" : ""} transition-all rounded-xl mt-1 ${message.id === urlParams().get("message") ? "bg-natural/10" : ""}`}
        onDoubleClick={selectMessageForReply}>
        {
          isGroupMessage && message.from != user.data?.email && senderProfile && nextMessageSender != message.from ? (
            <Link viewTransition to={chatIsCreated ? `/chat/${message.from}` : `/create-chat?email=${message.from}`}
              className={`mt-auto me-2`}>
              {
                senderProfile?.photoUrl ? (
                  <img src={senderProfile?.photoUrl} className="size-10 object-cover rounded-full object-center" />
                ) : (
                  <GradiantProfile name={senderProfile?.name} size={ProfileImageSizes.SMALL} />
                )
              }
            </Link>
          ) : (
            isGroupMessage && message.from != user.data?.email && (
              <div className="size-10 me-2"></div>
            )
          )
        }
        <div className={`lg:max-w-none max-w-[90%] flex flex-col font-Vazir ${messageIsForCurrentUser ? "flex-row-reverse" : ""}`}>
          {
            !isGroupMessage && (
              <div className="relative z-40">
                <ReactionsEmojiPicker message={message} />
              </div>
            )
          }
          <div className={`rounded-xl overflow-hidden flex flex-col ${messageIsForCurrentUser ? "" : "border"}`}>
            {
              replyedMessage && (
                <button onClick={scrollToMessageHandler}
                  className="bg-linear-to-tr p-2 flex rounded-t-xl flex-col items-start shrink from-gray-600 to-gray-900 text-white">
                  <span className="text-sm font-medium">
                    <FontAwesomeIcon icon={faReply} className="rotate-180 me-1" />
                    {replyedMessage.sender?.name}
                  </span>
                  <p className="text-xs mt-1 text-start" dir="auto">
                    {
                      replyedMessage.type !== "text" ? <span className="capitalize">{replyedMessage.type}</span> : (
                        parse(decryptedReplayedMessageContent.split("<br>").join(""))
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
              <TextMessage replayMessage={replyedMessage} key={message.id}
                message={{ ...message, content: decryptedContent }} isGroupMessage={isGroupMessage} senderProfile={senderProfile} />
            }
          </div>
        </div>
        {
          !isGroupMessage && (
            <MessageReaction message={message} />
          )
        }
      </div>
    );
  }
};

export default Message;
