import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { changeImage } from "../../redux/slices/openedImage";
import MessageType from "../../types/MessageType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import deleteMessage from "../../helpers/messages/deleteMessage";
import button from "../../cva/button";
import { useContext } from "react";
import { StickerPackModalContext } from "../../providers/StickerPackModalProvider";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
    msgType: "sticker" | "image"
}

export default function ImageOrStickerMessage({ message, scrollDown, type, recipients, msgType }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
    const dispatch = useAppDispatch();
    const { setIsActive, setPackId } = useContext(StickerPackModalContext);

    const deleteStickerHandler = () => {
        const { id, notificationId } = message;
        deleteMessage(
            {
                id,
                notificationId,
                recipientIds: recipients,
                type
            });
    }

    return (
        <>
            <button
                className={`${userEmail === message.from
                    ? "bg-linear-to-br from-primary-400 to-primary-600 text-white"
                    : "bg-secondary"
                    }
               w-fit min-w-36 px-3 pt-3 text-[0.925em] z-30 text-start transition-all font-light relative cursor-default`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    <div className="relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => msgType == 'image' && dispatch(changeImage({ ...message, type, recipients }))}>
                        <img
                            crossOrigin="anonymous" onLoad={scrollDown} src={message.content}
                            className={`${msgType == "image" ? "max-w-[400px] max-h-[275px]" : "size-36 aspect-square"} object-cover w-full`} />
                    </div>

                    <AnimatePresence>
                        {
                            selectedMessage && msgType == "sticker" && selectedMessage.id == message.id && (
                                <motion.div
                                    variants={{
                                        hide: {
                                            opacity: 0,
                                            transform: "scale(0.9)"
                                        },
                                        show: {
                                            opacity: 1,
                                            transform: "scale(1)"
                                        }
                                    }} initial="hide" animate="show" exit="hide" transition={{ duration: 0.2 }}
                                    className="absolute inset-2 flex h-fit gap-x-1.5 mt-auto">
                                    <button
                                        onClick={deleteStickerHandler}
                                        className={`size-8 text-sm flex items-center justify-center bg-secondary hover:bg-base border transition-all text-natural rounded-full`}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsActive(true);
                                            setPackId(message.packId);
                                            dispatch(changeSelectedMessage(null));
                                        }}
                                        className={button({ size: "extraSmall", className: "grow !rounded-full" })}>
                                        Show pack
                                    </button>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
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