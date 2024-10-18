import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Profile from "../types/Profile";

type PropTypes = {
    chat: Profile & { email: string, notSeenedMessages: number };
};

const ChatListItem: React.FC<PropTypes> = ({ chat }) => {
    const [unreadMessagesCount, setUnreadMessagesCount] = useState<number>(chat.notSeenedMessages);

    useEffect(() => {
        const q = query(
            collection(db, "chat_message"),
            where("from", "==", chat.email),
            where("seen", "==", false)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setUnreadMessagesCount(querySnapshot.size);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Link
                to={`/chat/${chat.email}`}
                className="flex items-center justify-between border-t hover:bg-base/50 text-sm px-5 py-3 transition-colors duration-300"
                key={chat.email}
            >
                <div className="flex items-center">
                    {/*Profile image*/}
                    {chat.photoUrl ? (
                        <img
                            src={chat.photoUrl}
                            alt={"profile"}
                            className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                    ) : (
                        <div className="w-[40px] h-[40px] border-2 rounded-full bg-base flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </div>
                    )}
                    <div className="ps-2">
                        <div>{chat.name}</div>
                    </div>
                </div>
                {unreadMessagesCount ? (
                    <div className="size-5 text-xs font-semibold rounded-full bg-red-500 text-white text-center flex items-center justify-center">
                        {unreadMessagesCount}
                    </div>
                ) : (
                    ""
                )}
            </Link>
        </>
    );
};

export default ChatListItem;