import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import { hideImage } from "../redux/slices/openedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../helpers/messages/deleteMessage";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import toastConf from "../../utils/toastConfig";
import downloadFile from "../helpers/downloadFile";

export default function ImageModal() {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const openedImageMessage = useAppSelector((state: RootState) => state.openedImage.message);
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const messageIsForCurrentUser = userEmail === openedImageMessage?.from;

    const downloadImageFileHandler = () => {
        setPending(true);
        downloadFile(openedImageMessage.content, (errorMsg) => {
            if (errorMsg) {
                toast.error(errorMsg, toastConf);
            }
            setPending(false);
        });
    }

    const deleteMessageHandler = () => {
        if (openedImageMessage.isGroupMessage) {
            deleteMessage(openedImageMessage.id, openedImageMessage.isGroupMessage);
        } else {
            deleteMessage(openedImageMessage.id);
        }
        dispatch(hideImage());
    }

    return (
        <>
            <ToastContainer />
            <AnimatePresence>
                {
                    openedImageMessage && (
                        <motion.div className="fixed inset-[-25%] bg-black/60 z-999 grid place-items-center"
                            variants={{
                                hide: {
                                    opacity: 0,
                                    transform: "translateY(25px)"
                                },
                                open: {
                                    opacity: 1,
                                    transform: "translateY(0px)"
                                }
                            }} initial="hide" animate="open" exit="hide">
                            <div className="fixed inset-0" onClick={() => dispatch(hideImage())}>

                            </div>
                            <div className="relative px-4">
                                <div className="relative">
                                    <img src={openedImageMessage.content} className="rounded-xl object-contain w-full h-full max-h-[calc(100svh-12rem)] max-w-[calc(100svw-1.5rem)]" />
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
                                        <button
                                            disabled={pending}
                                            onClick={downloadImageFileHandler}
                                            className={`${userEmail === openedImageMessage.from ? "size-8" : "h-8 px-2"} text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                            {
                                                pending ? (
                                                    <div
                                                        className="size-4 border border-e-transparent border-black rounded-full animate-spin">
                                                    </div>
                                                ) : (
                                                    <FontAwesomeIcon icon={faDownload} />
                                                )
                                            }
                                            {
                                                !messageIsForCurrentUser &&
                                                <span className="font-medium text-xs ms-1">
                                                    Download
                                                </span>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}