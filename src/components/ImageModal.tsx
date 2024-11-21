import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import { hideImage } from "../redux/slices/openedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../helpers/deleteMessage";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ImageModal() {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const openedImageMessage = useAppSelector((state: RootState) => state.openedImage.message);
    const dispatch = useAppDispatch();

    const messageIsForCurrentUser = userEmail === openedImageMessage?.from;

    const deleteMessageHandler = () => {
        deleteMessage(openedImageMessage.id);
        dispatch(hideImage());
    }

    return (
        <AnimatePresence>
            {
                openedImageMessage && (
                    <motion.div className="fixed inset-[-15%] bg-black/50 backdrop-blur-sm z-[999] grid place-items-center"
                        variants={{
                            hide: {
                                opacity: 0,
                                transform: "scale(0.8) translateY(60px)"
                            },
                            open: {
                                opacity: 1,
                                transform: "scale(1) translateY(0px)"
                            }
                        }} initial="hide" animate="open" exit="hide">
                        <div className="fixed inset-0 max-lg:pointer-events-none" onClick={() => dispatch(hideImage())}>

                        </div>
                        <button className="lg:hidden bg-white text-black size-12 flex items-center justify-center rounded-full fixed top-7 left-4 z-[999]" onClick={() => dispatch(hideImage())}>
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </button>
                        <div className="relative px-4">
                            <div className="relative">
                                <img src={openedImageMessage.content} className="object-contain w-full h-full" />
                                <div className={`bottom-3 right-3 absolute flex items-center z-50 transition-all`}>
                                    {
                                        userEmail === openedImageMessage.from && (
                                            <button
                                                onClick={deleteMessageHandler}
                                                className={`me-2 size-8 text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        )
                                    }
                                    <a href={openedImageMessage.content}
                                        className={`${userEmail === openedImageMessage.from ? "size-8" : "h-8 px-2"} text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
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
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}