import { Parser } from "html-to-react";
import changeReaction from "../../helpers/messages/changeReaction";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type PropTypes = {
    message: any;
    isGroupMessage?: boolean;
}

export default function MessageReaction({ message, isGroupMessage }: PropTypes) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;
    const { parse } = Parser();
    const [pending, setPending] = useState<boolean>(false);

    return (
        <AnimatePresence>
            {
                message.reaction && (
                    <motion.button
                        variants={{
                            hide: {
                                opacity: 0,
                                transform: "translate(10px, 15px) scale(0.6)"
                            },
                            open: {
                                opacity: 1,
                                transform: "translate(0px, 0px) scale(1)"
                            }
                        }} animate="open" exit="hide" initial="hide" transition={{ duration: 0.15 }}
                        className={`flex items-end disabled:opacity-50 top-0 bottom-0 z-20 mx-1 ${!messageIsForCurrentUser ? "" : "cursor-default"}`}
                        onClick={() => {
                            setPending(true);
                            !messageIsForCurrentUser && changeReaction(message.id, "", isGroupMessage ? true : false, () => setPending(false))
                        }} disabled={pending}>
                        <div className="size-8 border flex items-center justify-center bg-white rounded-full">
                            {parse(message.reaction)}
                        </div>
                    </motion.button>
                )
            }
        </AnimatePresence>
    )
}