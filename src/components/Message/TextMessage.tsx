import React from "react";
import { RootState } from "../../redux/store";
import { Parser } from "html-to-react";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import urlify from "../../helpers/urlify";

const TextMessage: React.FC<MessagePropTypes> = ({ message, isGroupMessage, replayMessage }) => {
  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
  const dispatch = useAppDispatch();

  const messageIsSelected = selectedMessage?.id === message.id;
  const messageIsForCurrentUser = userEmail === message.from;

  return (
    <div className="flex">
      <DeleteTextFileAudioMessageButton replayMessage={replayMessage} message={message} isGroupMessage={isGroupMessage} />
      <button
        onBlur={() => dispatch(changeSelectedMessage(null))}
        onFocus={(e) => {
          e.target.tagName != "A" && (
            dispatch(changeSelectedMessage(message))
          )
        }}
        className={`${messageIsForCurrentUser
          ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
          : "bg-white"
          } ${selectedMessage?.id === message.id ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "!rounded-s-none" : ""}
             w-fit flex-grow min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative`}
      >
        <p className="max-w-[400px] break-all message-text" dir="auto">
          {parse(urlify(message.content))}
        </p>
        <div className="mt-1 flex justify-end">
          <MessageTime message={message} />
          {message.from === userEmail && !isGroupMessage && (
            <MessageSeen message={message} />
          )}
        </div>
      </button>
    </div>
  );
};

export default TextMessage;
