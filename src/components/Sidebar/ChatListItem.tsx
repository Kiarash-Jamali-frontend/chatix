import { and, collection, limit, onSnapshot, or, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faImage } from "@fortawesome/free-regular-svg-icons";
import { Parser } from "html-to-react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { faCheck, faVideo } from "@fortawesome/free-solid-svg-icons";
import GradiantProfile from "../GradiantProfile";
import { ChatData } from "../../redux/slices/chats";
import customFormatRelative from "../../helpers/customFormatRelative";

type PropTypes = {
    chat: ChatData;
};

const ChatListItem: React.FC<PropTypes> = ({ chat }) => {
    const selectedChatOrGroupID = useAppSelector((state: RootState) => state.selectedChatOrGroup.id);
    const { parse } = Parser();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email)
    const [unreadMessagesCount, setUnreadMessagesCount] = useState<number>(chat.notSeenedMessages);
    const [lastMessage, setLastMessage] = useState<{ [key: string]: any } | null>();
    const chatIsSelected = selectedChatOrGroupID === chat.email;

    useEffect(() => {
        const unreadMessagesQuery = query(
            collection(db, "chat_message"),
            where("from", "==", chat.email),
            where("to", "==", userEmail),
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
                if (querySnapshot.size) {
                    setLastMessage(querySnapshot.docs[0].data());
                }
            });

            return () => {
                unsubscribeLastMessage();
            }
        }
    }, [])

    return (
        <div className="px-2 mb-1" style={{
            order: `-${lastMessage?.timestamp?.seconds || chat.createdAt?.seconds || 0}`
        }}>
            <Link unstable_viewTransition
                to={`/chat/${chat.email}`}
                className={`flex items-center justify-between ${chatIsSelected ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-base/50 hover:border-black/5"} border border-transparent rounded-xl text-sm px-2 py-1.5 transition-colors duration-300`}
                key={chat.email}
            >
                <div className="flex items-center w-full flex-grow">
                    {/*Profile image*/}
                    <div className="basis-12">
                        {chat.photoUrl ? (
                            <img
                                src={chat.photoUrl}
                                alt={"profile"}
                                className="size-12 border border-black/10 min-w-12 object-cover rounded-full"
                            />
                        ) : (
                            <GradiantProfile name={chat.name} />
                        )}
                    </div>
                    <div className="ps-2 min-w-0 flex-grow flex items-end justify-between">
                        <div className="flex-grow min-w-0">
                            <div className={`${chatIsSelected && "text-white"} text-sm font-medium`}>{chat.name}</div>
                            <div dir="auto" className={`text-left last-message text-xs min-w-0 w-full ${chatIsSelected ? "text-white/80" : "text-black/80"} mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap break-all`}>
                                {
                                    lastMessage && (
                                        lastMessage?.type !== "text" && (
                                            <div className="flex capitalize">
                                                <FontAwesomeIcon icon={lastMessage?.type === "image" ? faImage : lastMessage?.type === "video" ? faVideo : faFile}
                                                    className="me-1" />
                                                {lastMessage?.type}
                                            </div>
                                        )
                                    )
                                }
                                {
                                    lastMessage?.type === "text" && parse(lastMessage.content.split("<br>").join(" "))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {unreadMessagesCount ? (
                                <div className="size-4 text-[11px] rounded-full bg-red-500 text-white text-center font-Inter flex items-center justify-center ms-auto mb-1">
                                    {unreadMessagesCount}
                                </div>
                            ) : (
                                ""
                            )}
                            {
                                lastMessage && (
                                    <div className="flex items-center justify-between w-fit">
                                        <div className={`${chatIsSelected ? "text-white/60" : "text-black/60"} flex items-center`}>
                                            <div className="text-xs text-nowrap">
                                                {customFormatRelative(lastMessage.timestamp)}
                                            </div>
                                            {
                                                lastMessage.from === userEmail && (
                                                    <div className={`flex items-center ${lastMessage.seen ? "ms-2" : "ms-1"} relative`}>
                                                        {lastMessage.seen && (
                                                            <FontAwesomeIcon icon={faCheck} width={10} height={10} className="translate-x-[-5px] absolute" />
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
        </div>
    );
};

export default ChatListItem;