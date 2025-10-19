import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { changeImage } from "../../redux/slices/openedImage";
import MessageType from "../../types/MessageType";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
    msgType: "sticker" | "image"
}

export default function ImageOrStickerMessage({ message, scrollDown, type, recipients, msgType }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);

    const dispatch = useAppDispatch();

    return (
        <>
            <button
                className={`${userEmail === message.from
                    ? "bg-linear-to-br from-primary-400 to-primary-600 text-white"
                    : "bg-secondary"
                    }
               w-fit min-w-32 px-3 pt-3 text-[0.925em] z-30 text-start transition-all font-light relative cursor-default`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    <div className="relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => msgType == 'image' && dispatch(changeImage({ ...message, type, recipients }))}>
                        <img
                            crossOrigin="anonymous" onLoad={scrollDown} src={message.content}
                            className={`${msgType == "image" ? "max-w-[400px] max-h-[275px]" : "size-32 aspect-square"} object-cover w-full`} />
                    </div>
                </div>

                <div className="flex justify-end items-center my-2">
                    <MessageTime message={message} />
                    {message.from === userEmail && type == MessageType.PRIVATE && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
        </>
    )
}