import React, { useRef, useState } from "react";
import button from "../../cva/button";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, storage } from "../../helpers/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { faClose, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import ContentEditable from 'react-contenteditable'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../../helpers/getFileExt";

type PropTypes = {
  email: string;
  chatId: string;
};

const ChatInput: React.FC<PropTypes> = ({ email, chatId }) => {
  const userEmail = useSelector((state: RootState) => state.user.data!.email);

  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");
  const [filePending, setFilePending] = useState<boolean>(false);
  const [textMessagePending, setTextMessagePending] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = async () => {
    setTextMessagePending(true);
    setMessageText("");
    await addDoc(collection(db, "chat_message"), {
      content: messageText.trim(),
      from: userEmail,
      seen: false,
      timestamp: Timestamp.now(),
      to: email,
      type: "text"
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
        const fileStorageRef = ref(storage, `chats/${chatId}/${uuidv4()}.${getFileExt(file.name)}`);
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
          to: email,
          type: fileType
        };
        if (fileType === "file" || fileType === "audio") {
          data.fileName = file.name;
          data.fileSize = file.size;
        }
        await addDoc(collection(db, "chat_message"), data);
        i++;
      }
    }
    setFilePending(false);
  }

  return (
    <div className="relative flex items-stretch max-h-14">
      <EmojiPicker open={emojiPickerIsOpen} className="!absolute bottom-[4.5rem] !max-w-[calc(100%-1.25rem*2)] !overflow-hidden shadow-xl !rounded-xl z-50"
        height={300} searchDisabled={true} lazyLoadEmojis={true}
        onEmojiClick={(e) => setMessageText((prev) => prev += `<img src="${e.getImageUrl()}" style="display:inline;width:1.25em;height:1.25em" />`)} />
      <div className="px-3 shadow-sm rounded-full border bg-white flex items-center flex-grow me-2">
        <button className="me-2" onClick={() => setEmojiPickerIsOpen(prev => !prev)}>
          <FontAwesomeIcon icon={emojiPickerIsOpen ? faClose : faFaceSmile} className="text-black/50 size-5 flex items-center" />
        </button>
        <ContentEditable
          html={messageText ? messageText : ""}
          onChange={(e) => setMessageText(e.target.value)}
          className="focus:outline-none w-full text-sm max-w-none placeholder:text-sm max-h-11 overflow-hidden"
        />
        {
          filePending ? (
            <span className="text-sm text-black/60 min-w-24">
              Sending file ...
            </span>
          ) : (
            <button
              className={button({
                intent: "dark",
                className: `${textMessagePending && "pointer-events-none opacity-70"} !rounded-full`,
              })}
              onClick={sendMessageHandler}
            >
              Send
              <FontAwesomeIcon icon={faPaperPlane} className="ms-1.5" />
            </button>
          )
        }
      </div>

      <input type="file" id="fileInput" hidden ref={fileInputRef} multiple={false} onChange={sendFileHandler} />

      <button className="size-14 border shadow-sm bg-white rounded-full flex items-center justify-center" onClick={chooseFileHandler} disabled={filePending}>
        <FontAwesomeIcon icon={faPaperclip} className="size-5" />
      </button>
    </div >
  );
};

export default ChatInput;
