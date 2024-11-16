import EmojiPicker from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import changeReaction from "../../../helpers/changeReaction";

type PropTypes = {
    message: any;
}

export default function ReactionsEmojiPicker({ message }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);

    const messageIsSelected = selectedMessageID === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    return (
        <AnimatePresence>
            {
                messageIsSelected && !messageIsForCurrentUser && (
                    <motion.div className={`absolute right-3 top-[-1.35rem] flex items-center z-50`} initial={{
                        opacity: 0
                    }} animate={{
                        opacity: 1
                    }} exit={{
                        opacity: 0
                    }}>
                        <EmojiPicker reactionsDefaultOpen={true} allowExpandReactions={false} className="!bg-white" onReactionClick={(e) => changeReaction(message.id, e.getImageUrl())} />
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}