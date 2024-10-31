import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

type PropTypes = {
    selectedMessage: any;
    message: any;
    callback: () => void;
}

export default function DeleteMessageButton({ selectedMessage, message, callback }: PropTypes) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    return (
        <>
            <AnimatePresence>
                {
                    selectedMessage?.id === message.id && userEmail === message.from && (
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
                            <button className="px-2 h-full bg-white flex items-center rounded-e-lg border border-black/10 border-s-transparent" onClick={callback}>
                                <FontAwesomeIcon icon={faTrashCan} color="#000" />
                            </button>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}