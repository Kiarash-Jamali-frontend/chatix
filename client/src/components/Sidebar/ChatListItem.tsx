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
import { ChatData } from "../../redux/slices/chats";
import customFormatRelative from "../../helpers/customFormatRelative";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import { decryptMessage, isEncryptedMessage } from "../../utils/crypto";
import { useEncryption } from "../../hooks/useEncryption";

type PropTypes = {
    chat: ChatData;
    search: string;
};

const ChatListItem: React.FC<PropTypes> = ({ chat, search }) => {
    const selectedChatOrGroupID = useAppSelector((state: RootState) => state.selectedChatOrGroup.id);
    const { parse } = Parser();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email)
    const [unreadMessagesCount, setUnreadMessagesCount] = useState<number>(chat.notSeenedMessages);
    const [lastMessage, setLastMessage] = useState<{ [key: string]: any } | null>();
    const [decryptedLastMessage, setDecryptedLastMessage] = useState<string>("");
    const chatIsSelected = selectedChatOrGroupID === chat.email;
    const { getChatSecret } = useEncryption();

    useEffect(() => {
        if (userEmail) {
            const unreadMessagesQuery = query(
                collection(db, "chat_message"),
                where("from", "==", chat.email),
                where("to", "==", userEmail),
                where("seen", "==", false)
            );
            const unsubscribeUnreadMessagesCount = onSnapshot(unreadMessagesQuery, { includeMetadataChanges: true }, (querySnapshot) => {
                setUnreadMessagesCount(querySnapshot.size);
            });

            return () => {
                unsubscribeUnreadMessagesCount();
            };
        }
    }, [userEmail, chat.email]);

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
            const unsubscribeLastMessage = onSnapshot(lastMessageQuery, { includeMetadataChanges: true }, (querySnapshot) => {
                if (querySnapshot.size) {
                    setLastMessage(querySnapshot.docs[0].data());
                } else {
                    setLastMessage(null);
                }
            });

            return () => {
                unsubscribeLastMessage();
            }
        }
    }, [chat.email])

    // Handle decryption of last message for preview
    useEffect(() => {
        const handleDecryption = async () => {
            if (lastMessage && isEncryptedMessage(lastMessage) && lastMessage.type === "text") {
                try {
                    const chatSecret = getChatSecret(lastMessage.from, lastMessage.to);
                    const decrypted = await decryptMessage(
                        {
                            encryptedContent: lastMessage.encryptedContent,
                            iv: lastMessage.iv,
                            salt: lastMessage.salt
                        },
                        chatSecret
                    );
                    setDecryptedLastMessage(decrypted);
                } catch (error) {
                    console.error('Failed to decrypt last message:', error);
                    setDecryptedLastMessage('[Message]');
                }
            } else if (lastMessage?.type === "text") {
                setDecryptedLastMessage(lastMessage.content || '');
            } else {
                setDecryptedLastMessage('');
            }
        };

        handleDecryption();
    }, [lastMessage, getChatSecret]);

    return (
        <div className={`lg:px-2 lg:mb-1 ${(!chat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ? "hidden" : "block"}`}
            style={{
                order: `-${lastMessage?.timestamp?.seconds || chat.createdAt?.seconds || 0}`
            }}>
            <Link viewTransition
                to={`/chat/${chat.email}`}
                className={`ps-4 flex items-center justify-between ${chatIsSelected ? "lg:bg-primary-500 lg:hover:bg-primary-600" : "lg:hover:bg-base/50 lg:hover:border-natural/5"} border-natural/10 lg:border lg:border-transparent lg:rounded-xl text-sm lg:px-2 lg:py-1.5 transition-colors`}
                key={chat.email}
            >
                <div className="flex items-stretch w-full grow">
                    {/*Profile image*/}
                    <div className="basis-12 py-2 lg:py-0">
                        <ProfileImage name={chat.name}
                            photoUrl={chat.photoUrl}
                            size={ProfileImageSizes.MEDIUM} />
                    </div>
                    <div className="border-b py-2 lg:py-0 lg:border-b-0 border-natural/8 ps-2 min-w-0 grow flex items-center justify-between">
                        <div className="min-w-0 grow flex items-end justify-between pe-4 lg:pe-0">
                            <div className="grow min-w-0">
                                <div className={`${chatIsSelected && "text-white"} text-sm font-medium`}>
                                    {!search ? chat.name : chat.name.split("").map((letter) => {
                                        return (
                                            <span className={`${search.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) ?
                                                `font-extrabold underline underline-offset-3 
                                         ${!chatIsSelected ? "text-primary" : ""}` : ""}`}>
                                                {letter}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div dir="auto" className={`text-left last-message text-xs min-w-0 w-full ${chatIsSelected ? "text-white/80" : "text-natural/80"} mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap break-all`}>
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
                                        lastMessage?.type === "text" && parse(decryptedLastMessage?.split("<br>").join(" "))
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
                                        <div className="flex items-center justify-between w-fit ps-2">
                                            <div className={`${chatIsSelected ? "text-white/60" : "text-natural/60"} flex items-center`}>
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
                </div>
            </Link>
        </div>
    );
};

export default ChatListItem;