import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import deleteMessage from "../../../helpers/deleteMessage";
import MessagePropTypes from "../../../types/MessagePropTypes";

export default function DeleteTextFileAudioMessageButton({ message }: MessagePropTypes) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);
    const messageIsForCurrentUser = userEmail === message.from;
    return (
        <>
            <AnimatePresence>
                {
                    selectedMessageID === message.id && messageIsForCurrentUser && (
                        <motion.div initial={{
                            opacity: 0,
                            translateX: "-1rem",
                        }} animate={{
                            opacity: 1,
                            translateX: "0",
                        }} exit={{
                            opacity: 0,
                            translateX: "-1rem",
                        }}>
                            <button className="px-2 h-full bg-white flex items-center rounded-e-lg border border-black/10 border-s-transparent"
                                onClick={() => deleteMessage(message.id)}>
                                <FontAwesomeIcon icon={faTrashCan} color="#000" />
                            </button>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}