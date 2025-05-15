import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction } from "react";

type PropTypes = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export default function Modal({ isActive, setIsActive, children }: PropTypes) {

    return (
        <AnimatePresence>
            {
                isActive && (
                    <motion.div className="fixed inset-0 bg-black/60 px-5 z-999 grid place-items-center"
                        variants={{
                            hide: {
                                opacity: 0
                            },
                            open: {
                                opacity: 1
                            }
                        }} initial="hide" animate="open" exit="hide">
                        <div className="fixed inset-0 grid place-items-center" onClick={() => setIsActive(false)}>
                        </div>
                        {
                            children
                        }
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}