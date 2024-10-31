import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

type PropTypes = {
    selectedMessage: any;
    message: any;
    callback: (e: EmojiClickData) => void;
}

export default function ReactionsEmojiPicker({ selectedMessage, message, callback }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);

    return (
        <AnimatePresence>
            {
                selectedMessage?.id === message.id && userEmail !== message.from && (
                    <motion.div className={`absolute right-4 flex items-center`} initial={{
                        top: "-30%",
                        opacity: 0
                    }} animate={{
                        top: "-40%",
                        opacity: 1
                    }} exit={{
                        top: "-30%",
                        opacity: 0
                    }}>
                        <EmojiPicker reactionsDefaultOpen={true} allowExpandReactions={false} className="!bg-white" onReactionClick={callback} />
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}