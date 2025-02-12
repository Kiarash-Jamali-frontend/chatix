import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import changeReaction from "../../helpers/messages/changeReaction";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";

type PropTypes = {
    message: any;
}


export default function ReactionsEmojiPicker({ message }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);
    const dispatch = useAppDispatch();

    const messageIsSelected = selectedMessageID === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    const emojiAndReactionClickHandler = (e: EmojiClickData) => {
        changeReaction(message.id, e.getImageUrl());
        dispatch(changeSelectedMessage(null))
    }

    return (
        <AnimatePresence>
            {
                messageIsSelected && !messageIsForCurrentUser && (
                    <motion.div className={`absolute right-3 top-[-1.35rem] flex items-center z-50`} initial={{
                        opacity: 0,
                        transform: "scale(0.9) translateX(15px)"
                    }} animate={{
                        opacity: 1,
                        transform: "scale(1) translateX(0px)"
                    }} exit={{
                        opacity: 0,
                        transform: "scale(0.9) translateX(15px)"
                    }}>
                        <EmojiPicker reactionsDefaultOpen={true} allowExpandReactions={false} className="!bg-white"
                            onReactionClick={emojiAndReactionClickHandler} onEmojiClick={emojiAndReactionClickHandler} />
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}