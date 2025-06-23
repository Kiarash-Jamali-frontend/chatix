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
import customFormatRelative from "../../helpers/customFormatRelative";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";

type PropTypes = {
    group: SidebarGroupData;
    search: string;
};

export default function GroupListItem({ group, search }: PropTypes) {
    const { parse } = Parser();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedChatOrGroupID = useAppSelector((state: RootState) => state.selectedChatOrGroup.id);
    const groupIsSelected = selectedChatOrGroupID === group.id;
    const [lastMessage, setLastMessage] = useState<{ [key: string]: any } | null>();
    const [notSeenedMessagesCount, setNotSeenedMessagesCount] = useState<number>(0);

    useEffect(() => {
        if (userEmail) {
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
        }
    }, [userEmail])

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
            <div className={`lg:px-2 lg:mb-1 ${(!group.groupName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ? "hidden" : "block"}`} style={{
                order: `-${lastMessage?.timestamp?.seconds || group.createdAt?.seconds || 0}`
            }}>
                <Link viewTransition
                    to={`/group/${group.id}`}
                    className={`ps-4 flex items-center justify-between ${groupIsSelected ? "lg:bg-primary-500 lg:hover:bg-primary-600" : "lg:hover:bg-base/50 lg:hover:border-natural/5"} lg:border lg:border-transparent lg:rounded-xl text-sm lg:px-2 lg:py-1.5 transition-colors`}
                    key={group.id}
                >
                    <div className="flex items-stretch w-full grow">
                        {/*Profile image*/}
                        <div className="basis-12 py-2 lg:py-0">
                            <ProfileImage name={group.groupName}
                                photoUrl={group.groupPhotoUrl}
                                size={ProfileImageSizes.MEDIUM} />
                        </div>
                        <div className="border-b py-2 lg:py-0 lg:border-b-0 border-natural/8 ps-2 min-w-0 grow flex items-center justify-between">
                            <div className="min-w-0 grow flex items-end justify-between pe-4">
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
                    </div>
                </Link>
            </div>
        </>
    )
}