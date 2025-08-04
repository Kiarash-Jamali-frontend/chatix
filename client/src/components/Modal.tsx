import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type PropTypes = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export default function Modal({ isActive, setIsActive, children }: PropTypes) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isActive) return;

        // ذخیره موقعیت فعلی
        const currentState = location.state;

        // جایگزینی تاریخچه با state جدید
        navigate(location, {
            state: { ...currentState, modalOpen: true }
        });

        const handleBackButton = (event: PopStateEvent) => {
            if (location.state?.modalOpen) {
                event.preventDefault();
                setIsActive(false);
                navigate(location, {
                    state: currentState
                });
            }
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
            // بازگرداندن state قبلی هنگام unmount
            if (location.state?.modalOpen) {
                navigate(location, {
                    state: currentState
                });
            }
        };
    }, [isActive]);

    return (
        <AnimatePresence>
            {
                isActive && (
                    <motion.div className="fixed inset-0 bg-black/60 z-999 grid lg:place-items-center"
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
                        <motion.div
                            variants={{
                                hide: {
                                    opacity: 0,
                                    transform: "translateY(2rem)"
                                },
                                open: {
                                    opacity: 1,
                                    transform: "translateY(0px)"
                                }
                            }} transition={{ duration: 0.3 }}
                            className="w-full h-fit lg:my-auto max-lg:mt-auto lg:max-w-lg rounded-t-2xl lg:rounded-xl bg-secondary max-lg:border-b-transparent border p-6 shadow-xl"
                        >
                            {
                                children
                            }
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}