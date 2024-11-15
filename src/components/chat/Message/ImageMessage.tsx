import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../../../helpers/deleteMessage";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import toDataURL from "../../../helpers/toDataURL";
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

    const getImageName = (): string => {
        return message.content.split("/").at(-1);
    }

    const handleDownload = async () => {
        const a = document.createElement("a");
        a.href = await toDataURL(message.content);
        a.download = getImageName();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <button
                className={`${userEmail === message.from
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                    }
               w-fit min-w-32 shadow-sm p-3 text-[0.925em] z-30 rounded-lg text-start transition-all font-light font-Vazir relative cursor-default`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent">
                    <img onLoad={scrollDown} src={message.content} className="object-cover max-w-[400px] max-h-[275px]" />
                    <div className={`top-3 left-3 absolute flex items-center z-50 ${!messageIsSelected ? "opacity-0" : ""} transition-all`}>
                        {
                            userEmail === message.from && (
                                <button
                                    onClick={() => deleteMessage(message.id)}
                                    className={`me-2 size-8 text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            )
                        }
                        <ReactionsEmojiPicker message={message} />
                        <button onClick={handleDownload}
                            className={`${userEmail === message.from ? "size-8" : "h-8 px-2"} text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                            <FontAwesomeIcon icon={faDownload} />
                            {
                                !messageIsForCurrentUser &&
                                <span className="font-medium text-xs ms-1">
                                    Download
                                </span>
                            }
                        </button>
                    </div>

                    <div className="flex justify-end absolute bottom-1 right-3 z-10">
                        <MessageTime message={message} />
                        {message.from === userEmail && (
                            <MessageSeen message={message} />
                        )}
                    </div>
                </div>
            </button>
        </>
    )
}