import React, { useRef, useState } from "react";
import button from "../cva/button";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { faClose, faPaperclip, faReply } from "@fortawesome/free-solid-svg-icons";
import ContentEditable from 'react-contenteditable'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../helpers/files/getFileExt";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeMessageSelectedForReply } from "../redux/slices/messageSelectedForReply";
import { Parser } from "html-to-react";

type PropTypes = {
  mode: "group" | "private";
  groupId?: string;
  oppositeProfile?: any;
  chatId?: string;
};

const ChatInput: React.FC<PropTypes> = ({ oppositeProfile, chatId, mode, groupId }) => {
  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data!.email);
  const userProfile = useAppSelector((state: RootState) => state.user.profile);
  const messageSelectedForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);
  const dispatch = useAppDispatch();

  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");
  const [filePending, setFilePending] = useState<boolean>(false);
  const [textMessagePending, setTextMessagePending] = useState<boolean>(false);

  const isPrivateChat = (mode == "private" || !mode);
  const messageTo = isPrivateChat ? oppositeProfile.email : groupId;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = async () => {
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
    setTextMessagePending(false);
  };

  const chooseFileHandler = () => {
    const dt = new DataTransfer();
    if (fileInputRef.current?.files) fileInputRef.current.files = dt.files;
    fileInputRef.current?.click();
  }

  const sendFileHandler = async () => {
    setFilePending(true);
    if (fileInputRef.current?.files) {
      let i = 0;
      while (i < fileInputRef.current.files.length) {
        const file = fileInputRef.current.files[i];

        const fileStorageRef = ref(storage, `${isPrivateChat ? `chats/${chatId}` : `groups/${groupId}`}/${uuidv4()}.${getFileExt(file.name)}`);
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
          type: fileType
        };
        if (fileType === "file" || fileType === "audio") {
          data.fileName = file.name;
          data.fileSize = file.size;
        }
        await addDoc(collection(db, isPrivateChat ? "chat_message" : "group_message"), data);
        i++;
      }
    }
    setFilePending(false);
  }

  const removeMessageSelectedForRelpy = () => {
    dispatch(changeMessageSelectedForReply(null));
  }

  return (
    <div className={`relative flex items-stretch max-h-14`}>
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
            }} initial="hide" exit="hide" animate="open" className="!absolute bottom-[4.5rem] !max-w-[calc(100%-1.25rem*2)] !overflow-hidden shadow-xl !rounded-xl z-50">
              <EmojiPicker open={emojiPickerIsOpen}
                height={300} searchDisabled={true} previewConfig={{ showPreview: false }} lazyLoadEmojis={true}
                onEmojiClick={(e) => setMessageText((prev) => prev += `<img src="${e.getImageUrl()}" style="display:inline;width:1.3em;height:1.3em" />`)} />
            </motion.div>
          )
        }
      </AnimatePresence>
      <div className="flex-grow flex flex-col me-2 relative">
        <AnimatePresence>
          {
            messageSelectedForReply && (
              <motion.div className="py-2.5 px-3 overflow-hidden absolute w-full -top-[90%] z-[49] shadow-lg rounded-full bg-gradient-to-br from-gray-600 to-gray-800"
                variants={{
                  hide: {
                    opacity: 0
                  },
                  open: {
                    opacity: 1
                  }
                }} initial="hide" exit="hide" animate="open">
                <div className="flex items-center justify-between font-Vazir">
                  <div className="flex items-center text-xs md:text-sm">
                    <span className="text-white/75">
                      <FontAwesomeIcon icon={faReply} className="rotate-180 me-1.5" />
                      Reply {messageSelectedForReply.from === userEmail ? userProfile?.name : oppositeProfile.name}:
                    </span>
                    <div className="ms-1.5 lg:max-w-44 max-w-24 text-white overflow-hidden text-ellipsis whitespace-nowrap">
                      {
                        messageSelectedForReply.type !== "text" ? <span className="capitalize">{messageSelectedForReply.type}</span> : (
                          parse(messageSelectedForReply.content.split("<br>").join(""))
                        )
                      }
                    </div>
                  </div>
                  <button onClick={removeMessageSelectedForRelpy} className="text-white flex items-center">
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
        <div className="px-3 shadow-sm rounded-full border bg-white flex items-center flex-grow">
          <button className="me-2" onClick={() => setEmojiPickerIsOpen(prev => !prev)}>
            <FontAwesomeIcon icon={emojiPickerIsOpen ? faClose : faFaceSmile} className="text-black/50 size-5 flex items-center" />
          </button>
          <ContentEditable
            html={messageText ? messageText : ""}
            onChange={(e) => setMessageText(e.target.value)}
            className="focus:outline-none w-full text-sm max-w-none placeholder:text-sm max-h-11 overflow-hidden font-Vazir"
          />
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
                className={button({
                  intent: "primary",
                  className: `!py-2 !rounded-full`,
                })}
                disabled={textMessagePending}
                onClick={sendMessageHandler}
              >
                Send
                <FontAwesomeIcon icon={faPaperPlane} className="ms-1.5" />
              </button>
            )
          }
        </div>
      </div>

      <input type="file" id="fileInput" hidden ref={fileInputRef} multiple={false} onChange={sendFileHandler} />

      <button className="size-14 border shadow-sm bg-white rounded-full flex items-center justify-center" onClick={chooseFileHandler} disabled={filePending}>
        <FontAwesomeIcon icon={faPaperclip} className="size-5" />
      </button>
    </div >
  );
};

export default ChatInput;
