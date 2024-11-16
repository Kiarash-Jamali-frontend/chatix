import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../../../helpers/deleteMessage";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MessagePropTypes from "../../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../../redux/slices/selectedMessage";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
}

export default function ImageMessage({ message, scrollDown }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);

    const messageIsSelected = selectedMessageID === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    const dispatch = useAppDispatch();

    return (
        <>
            <button
                className={`${userEmail === message.from
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                    : "bg-white"
                    }
               w-fit min-w-32 p-3 text-[0.925em] z-30 text-start transition-all font-light font-Vazir relative cursor-default`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    <div className="relative z-30">
                        <ReactionsEmojiPicker message={message} />
                    </div>
                    <div className="relative rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent">
                        <img onLoad={scrollDown} src={message.content} className="object-cover max-w-[400px] max-h-[275px] w-full" />
                        <div className={`bottom-3 right-3 absolute flex items-center z-50 ${!messageIsSelected ? "opacity-0" : ""} transition-all`}>
                            {
                                userEmail === message.from && (
                                    <button
                                        onClick={() => deleteMessage(message.id)}
                                        className={`me-2 size-8 text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                )
                            }
                            <a href={message.content}
                                className={`${userEmail === message.from ? "size-8" : "h-8 px-2"} text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                <FontAwesomeIcon icon={faDownload} />
                                {
                                    !messageIsForCurrentUser &&
                                    <span className="font-medium text-xs ms-1">
                                        Download
                                    </span>
                                }
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end items-center mt-1">
                    <MessageTime message={message} />
                    {message.from === userEmail && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
        </>
    )
}