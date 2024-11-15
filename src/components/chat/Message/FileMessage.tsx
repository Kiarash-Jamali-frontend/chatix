import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeSelectedMessage } from "../../../redux/slices/selectedMessage";
import { RootState } from "../../../redux/store";
import MessagePropTypes from "../../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import getFileSizeByMB from "../../../helpers/getFileSizeByMB";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";

export default function FileMessage({ message }: MessagePropTypes) {

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
                    } ${messageIsSelected ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "rounded-e-none" : ""}
             w-fit min-w-32 shadow-sm pt-3 px-3 pb-1.5 text-[0.925em] z-30 rounded-lg text-start transition-all font-Vazir relative cursor-default`}
            >
                <div className="flex relative">
                    <a href={message.content} className={`flex items-center justify-center size-10 rounded-full ${messageIsForCurrentUser ? "bg-white text-blue-600" : "bg-black/5 text-black border shadow-sm"}`}>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <ReactionsEmojiPicker message={message} />
                    <div className="ms-2">
                        <div className="font-light mb-0.5 break-words max-w-60">{message.fileName}</div>
                        <div className={`text-xs ${messageIsForCurrentUser ? "text-white/60" : "text-black/50"}`}>{getFileSizeByMB(message.fileSize)} Mb</div>
                    </div>
                </div>
                <div className="mt-1 flex justify-end">
                    <MessageTime message={message} />
                    {message.from === userEmail && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
            <DeleteTextFileAudioMessageButton message={message} />
        </>
    )
}