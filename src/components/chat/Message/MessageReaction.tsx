import { Parser } from "html-to-react";
import changeReaction from "../../../helpers/changeReaction";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { AnimatePresence, motion } from "framer-motion";

export default function MessageReaction({ message }: { message: any }) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;
    const { parse } = Parser();
    return (
        <AnimatePresence>
            {
                message.reaction && (
                    <motion.button
                        variants={{
                            hide: {
                                opacity: 0,
                                transform: "translate(10px, 25px) scale(0.6)"
                            },
                            open: {
                                opacity: 1,
                                transform: "translate(0px, 0px) scale(1)"
                            }
                        }} animate="open" exit="hide" initial="hide"
                        className={`flex items-end top-0 bottom-0 z-20 mx-1 ${!messageIsForCurrentUser ? "" : "cursor-default"}`}
                        onClick={() => {
                            !messageIsForCurrentUser && changeReaction(message.id, "")
                        }}>
                        <div className="size-8 border flex items-center justify-center bg-white rounded-full">
                            {parse(message.reaction)}
                        </div>
                    </motion.button>
                )
            }
        </AnimatePresence>
    )
}