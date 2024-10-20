import { and, collection, limit, onSnapshot, or, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../helpers/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Profile from "../../types/Profile";
import { Parser } from "html-to-react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import getHourAndTime from "../../helpers/getHourAndTime";

type PropTypes = {
    chat: Profile & { email: string, notSeenedMessages: number };
};

const ChatListItem: React.FC<PropTypes> = ({ chat }) => {
    const { parse } = Parser();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email)
    const [unreadMessagesCount, setUnreadMessagesCount] = useState<number>(chat.notSeenedMessages);
    const [lastMessage, setLastMessage] = useState<{ [key: string]: any } | null>();

    useEffect(() => {
        const unreadMessagesQuery = query(
            collection(db, "chat_message"),
            where("from", "==", chat.email),
            where("seen", "==", false)
        );
        const unsubscribeUnreadMessagesCount = onSnapshot(unreadMessagesQuery, (querySnapshot) => {
            setUnreadMessagesCount(querySnapshot.size);
        });

        return () => {
            unsubscribeUnreadMessagesCount();
        };
    }, []);

    useEffect(() => {
        if (userEmail) {
            const lastMessageQuery = query(
                collection(db, "chat_message"),
                or(
                    and(
                        where("from", "==", userEmail),
                        where("to", "==", chat.email)
                    ),
                    and(
                        where("to", "==", userEmail),
                        where("from", "==", chat.email)
                    )
                ),
                orderBy("timestamp", "desc"),
                limit(1)
            );
            const unsubscribeLastMessage = onSnapshot(lastMessageQuery, (querySnapshot) => {
                setLastMessage(querySnapshot.docs[0].data());
            });

            return () => {
                unsubscribeLastMessage();
            }
        }
    }, [userEmail])

    return (
        <>
            <Link
                to={`/chat/${chat.email}`}
                className="flex items-center justify-between border-t hover:bg-base/50 text-sm px-5 py-3 transition-colors duration-300"
                key={chat.email}
            >
                <div className="flex items-center w-full flex-grow">
                    {/*Profile image*/}
                    {chat.photoUrl ? (
                        <img
                            src={chat.photoUrl}
                            alt={"profile"}
                            className="size-10 min-w-10 object-cover rounded-full"
                        />
                    ) : (
                        <div className="size-10 min-w-10 border-2 rounded-full bg-base flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </div>
                    )}
                    <div className="ps-2 flex-grow flex items-end justify-between max-w-[calc(100%-2.5rem)]">
                        <div className="flex-grow">
                            <div className="text-sm font-medium">{chat.name}</div>
                            <div className="text-xs text-black/80 mt-1 w-[calc(100%-1.5rem)] overflow-hidden text-ellipsis whitespace-nowrap">
                                {parse(lastMessage?.content)}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {unreadMessagesCount ? (
                                <div className="size-4 text-[10px] rounded-full bg-red-500 text-white text-center flex items-center justify-center ms-auto mb-1">
                                    {unreadMessagesCount}
                                </div>
                            ) : (
                                ""
                            )}
                            {
                                lastMessage && (
                                    <div className="flex items-center justify-between">
                                        <div className="text-black/60 flex items-center">
                                            <div className="text-xs">
                                                {getHourAndTime(lastMessage.timestamp)}
                                            </div>
                                            {
                                                lastMessage.from === userEmail && (
                                                    <div className="flex items-center ms-1">
                                                        {lastMessage.seen && (
                                                            <FontAwesomeIcon icon={faCheck} width={10} height={10} className="translate-x-[5px] absolute" />
                                                        )}
                                                        <FontAwesomeIcon icon={faCheck} width={10} height={10} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ChatListItem;