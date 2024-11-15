import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../../../helpers/deleteMessage";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../../redux/slices/selectedMessage";
import { useEffect, useRef } from "react";
import { changeCurrentPlayingMedia } from "../../../redux/slices/currentPlayingMedia";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";
import MessageReaction from "./MessageReaction";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
}

export default function VideoMessage({ message, scrollDown }: PropTypes) {

    const videoRef = useRef<HTMLVideoElement>(null);

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);
    const currentPlayingMediaID = useAppSelector((state: RootState) => state.currentPlayingMedia.data?.id);

    const dispatch = useAppDispatch();

    const messageIsSelected = selectedMessageID === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    const playVideoHandler = () => {
        dispatch(changeCurrentPlayingMedia(message));
    }

    useEffect(() => {
        if (currentPlayingMediaID === message.id) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [currentPlayingMediaID])

    return (
        <>
            <button
                className={`${messageIsForCurrentUser
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                    }
               w-fit min-w-32 shadow-sm p-3 text-[0.925em] z-30 rounded-lg text-start transition-all font-light font-Vazir`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    {
                        messageIsForCurrentUser && (
                            <button
                                onClick={() => deleteMessage(message.id)}
                                className={`${!messageIsSelected ? "opacity-0" : ""} absolute z-50 size-8 text-sm top-3 left-3 flex items-center justify-center bg-white hover:bg-gray-50 transition-all text-black rounded-full`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        )
                    }
                    <video onLoadedData={scrollDown} src={message.content} ref={videoRef} onPlay={playVideoHandler}
                        className="rounded-lg object-cover max-w-[400px] max-h-[275px]" controls>

                    </video>
                    <ReactionsEmojiPicker
                        message={message} />
                    <div className="flex items-center justify-end mt-2">
                        <MessageTime message={message} />
                        {message.from === userEmail && (
                            <MessageSeen message={message} />
                        )}
                    </div>
                </div>
            </button>
            <MessageReaction message={message} />
        </>
    )
}