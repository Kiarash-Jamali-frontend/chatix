import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { RootState } from "../../redux/store";
import MessagePropTypes from "../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import getFileSizeByMB from "../../helpers/files/getFileSizeByMB";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";

export default function FileMessage({ message, isGroupMessage }: MessagePropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
    const dispatch = useAppDispatch();

    const messageIsSelected = selectedMessage?.id === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    return (
        <div className="flex">
            <button
                onBlur={() => dispatch(changeSelectedMessage(null))}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                className={`${messageIsForCurrentUser
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:opacity-95"
                    : "bg-white hover:bg-gray-50"
                    } ${messageIsSelected ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "!rounded-e-none" : ""}
             w-fit min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative cursor-default ${message.replyTo ? "rounded-b-xl" : "rounded-xl border"}`}
            >
                <div className="flex relative">
                    <a href={message.content} className={`flex items-center justify-center size-10 rounded-full ${messageIsForCurrentUser ? "bg-white text-blue-500" : "bg-black/5 text-black border shadow-sm"}`}>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                    {
                        !isGroupMessage && (
                            <ReactionsEmojiPicker message={message} />
                        )
                    }
                    <div className="ms-2">
                        <div className="font-light break-words max-w-48 overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-60 mb-0.5 text-sm">{message.fileName}</div>
                        <div className={`text-xs ${messageIsForCurrentUser ? "text-white/60" : "text-black/50"}`}>{getFileSizeByMB(message.fileSize)} Mb</div>
                    </div>
                </div>
                <div className="mt-1 flex justify-end">
                    <MessageTime message={message} />
                    {message.from === userEmail && !isGroupMessage && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
            <DeleteTextFileAudioMessageButton message={message} />
        </div>
    )
}