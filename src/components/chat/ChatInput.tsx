import React, { useCallback, useRef, useState } from "react";
import button from "../../cva/button";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Parser } from "html-to-react";

type PropTypes = {
  email: string;
};

const ChatInput: React.FC<PropTypes> = ({ email }) => {
  const { parse } = Parser();
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);
  const userEmail = useSelector((state: RootState) => state.user.data!.email);
  const [messageText, setMessageText] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const chatInputRef = useRef<HTMLDivElement>(null);

  const sendMessageHandler = async () => {
    setPending(true);
    setMessageText("");
    await addDoc(collection(db, "chat_message"), {
      content: messageText,
      from: userEmail,
      seen: false,
      timestamp: Timestamp.now(),
      to: email,
      type: "text",
    });
    setPending(false);
  };

  const changeMessageHandler = useCallback(
    () => {
      setMessageText(chatInputRef.current ? chatInputRef.current.innerHTML.toString() : "");
    },
    [],
  )

  return (
    <div className="relative">

      <EmojiPicker open={emojiPickerIsOpen} className="!absolute bottom-[4.5rem] !max-w-[calc(100%-1.25rem*2)] !overflow-hidden shadow-xl !rounded-xl"
        height={300} searchDisabled={true} lazyLoadEmojis={true} 
        onEmojiClick={(e) => setMessageText((prev) => prev += `<img src="${e.getImageUrl()}" style="display:inline;width:1.25em;height:1.25em" />`)} />

      <div className="p-3 shadow-sm rounded-full border bg-white flex items-center">
        <button className="me-2" onClick={() => setEmojiPickerIsOpen(prev => !prev)}>
          <FontAwesomeIcon icon={emojiPickerIsOpen ? faClose : faFaceSmile} className="text-black/50 size-5 flex items-center" />
        </button>
        <div
          contentEditable={true}
          ref={chatInputRef}
          className="focus:outline-none w-full text-sm max-w-none placeholder:text-sm max-h-11 overflow-hidden"
          onBlur={changeMessageHandler}
          suppressContentEditableWarning={true}
        >{parse(messageText)}</div>
        <button
          className={button({
            intent: "dark",
            className: `${pending && "pointer-events-none opacity-70"} !rounded-full`,
          })}
          onClick={sendMessageHandler}
        >
          Send
          <FontAwesomeIcon icon={faPaperPlane} className="ms-1.5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
