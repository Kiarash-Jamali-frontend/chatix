import { motion } from "framer-motion";
import shareProfile from "../../helpers/usersAndProfiles/shareProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faShare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useChangeIsBlockingUser from "../../hooks/useChangeIsBlockingUser";
import deleteChat from "../../helpers/chat/deleteChat";
import { useNavigate } from "react-router-dom";
import Profile from "../../types/Profile";

export default function ChatHeaderMenu({ chatRoom, profile }: { chatRoom: any, profile: Profile & { email: string }; }) {
    const changeIsBlockingUser = useChangeIsBlockingUser(chatRoom);
    const navigate = useNavigate();

    const handleDeleteChat = async () => {
        const { successful } =
            await deleteChat({
                user1: chatRoom.user_1,
                user2: chatRoom.user_2,
                chatRoomId: chatRoom.id,
                oppositeUserEmail: profile.email
            });

        if (successful) {
            navigate("/", {
                replace: true,
                viewTransition: true
            });
        }
    }

    return (
        <motion.div
            dir="ltr"
            variants={{
                open: {
                    opacity: 1,
                    transform: "translate(0,0) scale(1)"
                },
                hide: {
                    opacity: 0,
                    transform: "translate(1rem, -1rem) scale(0.9)"
                }
            }} transition={{ duration: 0.2 }} initial="hide" animate="open" exit="hide"
            className="bg-secondary border p-1.5 absolute min-w-52 rounded-2xl mt-2 shadow-lg space-y-1.5">
            <button
                onClick={() => shareProfile({ name: profile.name, email: profile.email })}
                className={`bg-base border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                <FontAwesomeIcon icon={faShare} className="me-2" />
                Share
            </button>
            {/* <button
                className={`bg-base border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                <FontAwesomeIcon icon={faBellSlash} className="me-2" />
                Mute notifications
            </button> */}
            <button
                onClick={changeIsBlockingUser}
                className={`bg-base border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                <FontAwesomeIcon icon={faBan} className="me-2" />
                {chatRoom.isBlocked ? "Unblock" : "Block"}
            </button>
            <button
                onClick={handleDeleteChat}
                className={`bg-red-500/10 text-red-500 border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                Delete chat
            </button>
        </motion.div>
    )
}