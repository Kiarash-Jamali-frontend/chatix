import React from "react";
import { RootState } from "../../../redux/store";
import { Parser } from "html-to-react";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../../types/MessagePropTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeSelectedMessage } from "../../../redux/slices/selectedMessage";

const TextMessage: React.FC<MessagePropTypes> = ({ message }) => {
  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
  const dispatch = useAppDispatch();

  const messageIsSelected = selectedMessage?.id === message.id;
  const messageIsForCurrentUser = userEmail === message.from;

  return (
    <>
        <button
          onBlur={() => dispatch(changeSelectedMessage(null))}
          onFocus={() => dispatch(changeSelectedMessage(message))}
          className={`${messageIsForCurrentUser
            ? "bg-blue-600 text-white hover:opacity-90"
            : "bg-white border hover:bg-gray-50"
            } ${selectedMessage?.id === message.id ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "rounded-e-none" : ""}
             w-fit min-w-32 shadow-sm pt-3 px-3 pb-1.5 text-[0.925em] z-30 rounded-lg text-start transition-all font-Vazir relative`}
        >
          <p className="max-w-[400px] break-words">
            {parse(message.content)}
          </p>
          <div className="mt-1 flex justify-end">
            <MessageTime message={message} />
            {message.from === userEmail && (
              <MessageSeen message={message} />
            )}
          </div>
          <ReactionsEmojiPicker
            message={message} />
        </button>
        <DeleteTextFileAudioMessageButton message={message} />
    </>
  );
};

export default TextMessage;
