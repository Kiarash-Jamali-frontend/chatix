import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { SidebarGroupData } from "../../redux/slices/groups";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import { and, collection, doc, getDoc, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { Parser } from "html-to-react";
import GradiantProfile from "../GradiantProfile";
import customFormatRelative from "../../helpers/customFormatRelative";

export default function GroupListItem({ group, search }: { group: SidebarGroupData, search: string }) {
    const { parse } = Parser();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedChatOrGroupID = useAppSelector((state: RootState) => state.selectedChatOrGroup.id);
    const groupIsSelected = selectedChatOrGroupID === group.id;
    const [lastMessage, setLastMessage] = useState<{ [key: string]: any } | null>();
    const [notSeenedMessagesCount, setNotSeenedMessagesCount] = useState<number>(0);

    useEffect(() => {
        const q = query(collection(db, "group_member"), and(
            where("memberEmail", "==", userEmail),
            where("groupId", "==", group.id)
        ), limit(1))
        const unsub = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
            const data = querySnapshot.docs[0].data();
            setNotSeenedMessagesCount(data.notSeenedMessagesCount);
        });

        return () => {
            unsub();
        }
    }, [])

    useEffect(() => {
        const lastMessageQuery = query(
            collection(db, "group_message"),
            where("to", "==", group.id),
            orderBy("timestamp", "desc"),
            limit(1)
        );
        const unsubscribeLastMessage = onSnapshot(lastMessageQuery, { includeMetadataChanges: true }, async (querySnapshot) => {
            if (querySnapshot.size) {
                const lastMsgData = querySnapshot.docs[0].data();
                const senderProfileDocRef = doc(db, "profile", lastMsgData.from);
                const senderProfileSnapshot = await getDoc(senderProfileDocRef);
                const senderProfile = senderProfileSnapshot.data();
                setLastMessage({ ...lastMsgData, senderProfile: { ...senderProfile, email: lastMsgData.from } });
            } else {
                setLastMessage(null);
            }
        });

        return () => {
            unsubscribeLastMessage();
        }
    }, [])

    return (
        <>
            <div className={`px-2 mb-1 ${(!group.groupName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ? "hidden" : "block"}`} style={{
                order: `-${lastMessage?.timestamp?.seconds || group.createdAt?.seconds || 0}`
            }}>
                <Link unstable_viewTransition
                    to={`/group/${group.id}`}
                    className={`flex items-center justify-between ${groupIsSelected ? "bg-primary-500 hover:bg-primary-600" : "hover:bg-base/50 hover:border-natural/5"} border border-transparent rounded-xl text-sm px-2 py-1.5 transition-colors`}
                    key={group.id}
                >
                    <div className="flex items-center w-full grow">
                        {/*Profile image*/}
                        <div className="basis-12">
                            {group.groupPhotoUrl ? (
                                <img
                                    src={group.groupPhotoUrl}
                                    alt={"profile"}
                                    className="size-12 border border-natural/10 min-w-12 object-cover rounded-full"
                                />
                            ) : (
                                <GradiantProfile name={group.groupName} />
                            )}
                        </div>
                        <div className="ps-2 min-w-0 grow flex items-end justify-between max-w-[calc(100%-2.5rem)]">
                            <div className="grow min-w-0">
                                <div className={`${groupIsSelected && "text-white"} text-sm font-medium`}>
                                    <FontAwesomeIcon icon={faUsers} className="text-xs me-1" />
                                    {!search ? group.groupName : group.groupName.split("").map((letter) => {
                                        return (
                                            <span className={`${search.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) ?
                                                `font-extrabold underline underline-offset-3
                                              ${!groupIsSelected ? "text-primary" : ""}` : ""}`}>
                                                {letter}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className={`last-message text-xs min-w-0 w-full font-Vazir ${groupIsSelected ? "text-white/80" : "text-natural/80"} mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap break-all`}>
                                    {
                                        lastMessage && (
                                            <span className={`${groupIsSelected ? "text-white" : "text-natural"} font-medium`}>
                                                {lastMessage?.senderProfile.email == userEmail ? "You: " : `${lastMessage?.senderProfile.name}: `}
                                            </span>
                                        )
                                    }
                                    {
                                        lastMessage && (
                                            lastMessage?.type !== "text" && (
                                                <span className="capitalize">
                                                    <FontAwesomeIcon icon={lastMessage?.type === "image" ? faImage : lastMessage?.type === "video" ? faVideo : faFile}
                                                        className="me-1" />
                                                    {lastMessage?.type}
                                                </span>
                                            )
                                        )
                                    }
                                    {
                                        lastMessage?.type === "text" && parse(lastMessage.content.split("<br>").join(" "))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {notSeenedMessagesCount ? (
                                    <div className="size-4 text-[11px] rounded-full bg-red-500 text-white text-center font-Inter flex items-center justify-center ms-auto mb-1">
                                        {notSeenedMessagesCount}
                                    </div>
                                ) : (
                                    ""
                                )}
                                {
                                    lastMessage && (
                                        <div className="flex items-center justify-between w-fit">
                                            <div className={`${groupIsSelected ? "text-white/60" : "text-natural/60"} flex items-center`}>
                                                <div className="text-xs text-nowrap">
                                                    {customFormatRelative(lastMessage.timestamp)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}