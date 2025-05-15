import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, doc, runTransaction, Timestamp } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { faClose, faPaperclip, faPaperPlane, faReply } from "@fortawesome/free-solid-svg-icons";
import ContentEditable from 'react-contenteditable'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../helpers/files/getFileExt";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeMessageSelectedForReply } from "../redux/slices/messageSelectedForReply";
import { Parser } from "html-to-react";
import { MemberProfile } from "../pages/Group";

type PropTypes = {
  mode: "group" | "private";
  groupId?: string;
  oppositeProfile?: any;
  chatId?: string;
  membersProfiles?: MemberProfile[]
};

const ChatInput: React.FC<PropTypes> = ({ oppositeProfile, chatId, mode, groupId, membersProfiles }) => {
  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data!.email);
  const messageSelectedForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);
  const dispatch = useAppDispatch();

  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");
  const [filePending, setFilePending] = useState<boolean>(false);
  const [childNodes, setChildsNodes] = useState<Element[]>([]);
  const [textMessagePending, setTextMessagePending] = useState<boolean>(false);

  const isPrivateChat = (mode == "private" || !mode);
  const messageTo = isPrivateChat ? oppositeProfile.email : groupId;
  const messageTextHtmlBody = new DOMParser().parseFromString(messageText, "text/html").body;
  const showSendButton = (messageTextHtmlBody.innerText || childNodes.filter((cn) => cn.tagName == "IMG").length ? true : false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = async () => {
    setEmojiPickerIsOpen(false);
    setTextMessagePending(true);
    removeMessageSelectedForRelpy();
    setMessageText("");
    await addDoc(collection(db, isPrivateChat ? "chat_message" : "group_message"), {
      content: messageText.trim(),
      from: userEmail,
      seen: false,
      timestamp: Timestamp.now(),
      to: messageTo,
      type: "text",
      replyTo: messageSelectedForReply?.id || null
    });
    setNewNotSeenedMessageForAllGroupMembers();
    setTextMessagePending(false);
  };

  const chooseFileHandler = () => {
    const dt = new DataTransfer();
    if (fileInputRef.current?.files) fileInputRef.current.files = dt.files;
    fileInputRef.current?.click();
  }

  const sendFileHandler = async () => {
    setFilePending(true);
    removeMessageSelectedForRelpy();
    if (fileInputRef.current?.files) {
      let i = 0;
      while (i < fileInputRef.current.files.length) {
        const file = fileInputRef.current.files[i];
        const fileStorageRef = ref(storage,
          `${isPrivateChat ? `chats/${chatId}` : `groups/${groupId}`}/${uuidv4()}.${getFileExt(file.name)}`);
        await uploadBytes(fileStorageRef, file);
        const fileUrl = await getDownloadURL(fileStorageRef);
        let fileType = "";
        if (file.type.startsWith("image")) fileType = "image";
        if (file.type.startsWith("audio")) fileType = "audio";
        if (file.type.startsWith("video")) fileType = "video";
        if (file.type.startsWith("application")) fileType = "file";
        if (file.type.startsWith("text")) fileType = "file";
        const data: any = {
          content: fileUrl,
          from: userEmail,
          seen: false,
          timestamp: Timestamp.now(),
          to: messageTo,
          type: fileType,
          replyTo: messageSelectedForReply?.id || null
        };
        if (fileType === "file" || fileType === "audio") {
          data.fileName = file.name;
          data.fileSize = file.size;
        }
        await addDoc(collection(db, isPrivateChat ? "chat_message" : "group_message"), data);
        i++;
      }
    }
    setNewNotSeenedMessageForAllGroupMembers();
    setFilePending(false);
  }

  const setNewNotSeenedMessageForAllGroupMembers = async () => {
    membersProfiles?.filter((mp) => mp.email != userEmail).forEach((mp) => {
      runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "group_member", mp.groupMemberDocId), {
          notSeenedMessagesCount: mp.notSeenedMessagesCount + 1
        })
      })
    });
  }

  const removeMessageSelectedForRelpy = () => {
    dispatch(changeMessageSelectedForReply(null));
  }

  useEffect(() => {
    removeMessageSelectedForRelpy();
  }, [chatId, groupId])

  useEffect(() => {
    let newChildNodes: Element[] = [];
    for (let i = 0; i < messageTextHtmlBody.children.length; i++) {
      newChildNodes = [...newChildNodes, messageTextHtmlBody.children.item(i)!];
    }
    setChildsNodes(newChildNodes);
  }, [messageText])

  return (
    <div className={`relative flex items-stretch max-h-12`}
      onKeyDown={(e) => {
        if (e.key == "Enter" && !e.shiftKey && showSendButton) {
          e.preventDefault();
          sendMessageHandler();
        }
      }}>
      <AnimatePresence>
        {
          emojiPickerIsOpen && (
            <motion.div variants={{
              hide: {
                opacity: 0,
                transform: "scale(0.9) translate(-10px, 20px)"
              },
              open: {
                opacity: 1,
                transform: "scale(1) translate(0px, 0px)"
              }
            }} initial="hide" exit="hide" animate="open"
              className="absolute! bottom-14 md:max-w-[calc(100%-1.25rem*2)]! overflow-hidden! shadow-xl rounded-xl! z-50">
              <EmojiPicker open={emojiPickerIsOpen}
                height={300} searchDisabled={true} previewConfig={{ showPreview: false }} lazyLoadEmojis={true}
                onEmojiClick={(e) => setMessageText((prev) =>
                  prev += `<img src="${e.getImageUrl()}" style="display:inline;width:1.4em;height:1.4em" />`
                )} />
            </motion.div>
          )
        }
      </AnimatePresence>
      <AnimatePresence>
        {
          messageSelectedForReply && (
            <motion.div
              className="ps-3 pe-1 py-1 overflow-hidden absolute w-full z-49 shadow-lg rounded-full bg-linear-to-br from-zinc-600 to-zinc-800"
              variants={{
                hide: {
                  opacity: 0,
                  top: "0",
                },
                open: {
                  opacity: 1,
                  top: "-100%",
                }
              }} initial="hide" exit="hide" animate="open">
              <div className="flex items-center justify-between font-Vazir">
                <div className="flex items-center text-sm overflow-hidden w-full">
                  <span className="text-white/75 me-1 flex items-center">
                    <FontAwesomeIcon icon={faReply} className="rotate-180 me-1.5" />
                    <span className="me-1 hidden md:inline">Reply</span>{
                      groupId ? (
                        messageSelectedForReply.senderName
                      ) : (
                        messageSelectedForReply.from === userEmail ? "You" : oppositeProfile.name
                      )
                    }:
                  </span>
                  <div dir="auto" className="inline-flex text-white overflow-hidden text-ellipsis whitespace-nowrap">
                    {
                      messageSelectedForReply.type !== "text"
                        ?
                        (
                          <span className="capitalize">{messageSelectedForReply.type}</span>
                        )
                        : (
                          parse(messageSelectedForReply.content.split("<br>").join(""))
                        )
                    }
                  </div>
                </div>
                <button onClick={removeMessageSelectedForRelpy} className="text-white flex items-center p-2">
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
      <div className="grow flex flex-col me-2 relative">
        <div className="px-3 shadow-xs rounded-full border bg-secondary flex items-center grow">
          <button className="me-2 size-7 flex items-center text-natural/50 relative overflow-hidden"
            onClick={() => setEmojiPickerIsOpen(prev => !prev)}>
            <span className={`absolute transition-all duration-300 size-5 ${!emojiPickerIsOpen ? "opacity-0 scale-0" : ""}`}>
              <FontAwesomeIcon icon={faClose} className="!size-5" />
            </span>
            <span className={`absolute transition-all duration-300 size-5 ${emojiPickerIsOpen ? "opacity-0 scale-0" : ""}`}>
              <FontAwesomeIcon icon={faFaceSmile} className="!size-5" />
            </span>
          </button>
          <div dir="auto" className="w-full">
            <ContentEditable
              html={messageText ? messageText : ""}
              onChange={(e) => setMessageText(e.target.value)}
              className={`focus:outline-hidden relative before:font-Inter ${!showSendButton ? "before:content-['Message']" : "before:content-none"} before:absolute before:text-black/40 before:left-0 w-full break-all text-sm max-w-none max-h-11 overflow-hidden font-Vazir`}
            />
          </div>
          <div className="ms-2 flex items-center relative size-7">
            {
              filePending ? (
                <div>
                  <div className="size-7 rounded-full border-4 border-r-transparent animate-spin">
                  </div>
                </div>
                // <span className="text-sm text-black/60 min-w-24">
                // Sending file ...
                // </span>
              ) : (
                <button
                  onClick={chooseFileHandler} disabled={filePending} className="absolute text-natural/50 right-2">
                  <FontAwesomeIcon icon={faPaperclip} size="lg" />
                </button>
              )
            }
          </div>
        </div>
      </div>

      <input type="file" id="fileInput" hidden ref={fileInputRef} multiple={false} onChange={sendFileHandler} />

      <button className="size-12 min-w-12 disabled:opacity-75 transition-opacity border shadow-xs bg-linear-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center"
        onClick={sendMessageHandler} disabled={textMessagePending || filePending || !showSendButton}>
        <FontAwesomeIcon icon={faPaperPlane} size="lg"
          className={`absolute transition-all duration-300`} />
      </button>
    </div >
  );
};

export default ChatInput;