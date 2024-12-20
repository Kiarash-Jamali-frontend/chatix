import { faClose, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../../types/Profile";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import UserLastActivity from "./UserLastActivity";
import { useAppSelector } from "../../redux/hooks";
import button from "../../cva/button";
import toastConf from "../../helpers/toastConfig";
import { toast } from "react-toastify";
import shareData from "../../helpers/shareData";
import canBrowserShareData from "../../helpers/canBrowserShareData";
import useChangeIsBlockingUser from "../../hooks/useChangeIsBlockingUser";
import { RootState } from "../../redux/store";
import { Dispatch, SetStateAction } from "react";

type PropTypes = {
    userProfile: Profile & { email: string },
    chatRoom: any,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

export default function UserInfoModalContent({ userProfile, chatRoom, setIsActive }: PropTypes) {

    const changeIsBlockingUser = useChangeIsBlockingUser(chatRoom);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);

    const shareProfileDataHandler = () => {
        const sharedData: ShareData = {
            title: userProfile.name,
            text: `This is my email, you can create new chat with me in chatix: ${userProfile.email}`
        }
        if (canBrowserShareData(sharedData)) {
            shareData(sharedData);
        } else {
            toast.error("Your browser does not support this feature", toastConf);
        }
    }

    return (
        <AnimatePresence>
            <motion.div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
                variants={{
                    hide: {
                        opacity: 0,
                        transform: "scale(0.95) translateY(40px)"
                    },
                    open: {
                        opacity: 1,
                        transform: "scale(1) translateY(0px)"
                    }
                }} transition={{ duration: 0.35 }}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {
                            userProfile.photoUrl ? (
                                <img
                                    src={userProfile.photoUrl}
                                    alt={"profile"}
                                    className="size-14 object-cover rounded-full"
                                />
                            ) : (
                                <div className="size-14 border-2 rounded-full bg-base flex items-center justify-center">
                                    <FontAwesomeIcon icon={faUser} size="lg" />
                                </div>
                            )
                        }
                        <div className="ms-3 flex flex-col">
                            <div className="font-semibold mb-1">{userProfile.name}</div>
                            <UserLastActivity profile={userProfile} />
                        </div>
                    </div>
                    <button className="size-8 bg-gray-100 border rounded-full flex items-center justify-center" onClick={() => setIsActive(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                {userProfile.biography && (
                    <div className="bg-gray-50 py-2.5 px-4 border text-sm rounded-xl mt-5">
                        <span className="font-medium">Biography: </span>
                        <p className="text-black/75">
                            {userProfile.biography}
                        </p>
                    </div>
                )}
                <div className="bg-gray-50 flex items-center py-2.5 px-4 border text-sm rounded-xl mt-4">
                    <span className="font-medium me-1">Email: </span>
                    <p className="text-black/60">{userProfile.email}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className={button({ intent: "dark" })} onClick={shareProfileDataHandler}>
                        <FontAwesomeIcon icon={faShareNodes} className="me-1.5" />
                        Share
                    </button>

                    {
                        (chatRoom.blockedFrom === userEmail || !chatRoom.isBlocked) && (
                            <button
                                className={button({ intent: chatRoom.isBlocked ? "default" : "danger" })}
                                onClick={changeIsBlockingUser}
                            >
                                {chatRoom.isBlocked ? "Unblock" : "Block"}
                                <span className="font-bold ms-1">{userProfile.name}</span>
                            </button>
                        )
                    }

                    {
                        (chatRoom.blockedFrom === userProfile.email && chatRoom.isBlocked) && (
                            <p className="text-sm text-center my-auto text-black/75">MR.X has blocked you.</p>
                        )
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}