import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { changeImage } from "../../redux/slices/openedImage";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
}

export default function ImageMessage({ message, scrollDown, isGroupMessage }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);

    const dispatch = useAppDispatch();

    return (
        <>
            <button
                className={`${userEmail === message.from
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                    : "bg-white"
                    }
               w-fit min-w-32 px-3 pt-3 text-[0.925em] z-30 text-start transition-all font-light relative cursor-default`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    <div className="relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => dispatch(changeImage({ ...message, isGroupMessage }))}>
                        <img onLoad={scrollDown} src={message.content} className="object-cover max-w-[400px] max-h-[275px] w-full" />
                    </div>
                </div>

                <div className="flex justify-end items-center my-2">
                    <MessageTime message={message} />
                    {message.from === userEmail && !isGroupMessage && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
        </>
    )
}