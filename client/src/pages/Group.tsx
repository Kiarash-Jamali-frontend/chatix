import { useEffect, useRef, useState } from "react";
import { redirect, useParams } from "react-router-dom"
import { changeSelectedChatOrGroupID } from "../redux/slices/selectedChatOrGroup";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SidebarGroupData } from "../redux/slices/groups";
import { and, collection, doc, onSnapshot, orderBy, query, runTransaction, Timestamp, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import GroupHeader from "../components/group/GroupHeader";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message/Message";
import { RootState } from "../redux/store";
import Profile from "../types/Profile";
import GroupMember from "../types/GroupMember";
import ImageModal from "../components/ImageModal";
import { isSameDay } from "date-fns";
import customFormatRelative from "../helpers/customFormatRelative";

export type MemberProfile = (Profile & {
    id: string; email: string, groupMemberDocId: string, removedFromGroup: boolean,
    notSeenedMessagesCount: number
});

export default function Group() {

    const dispatch = useAppDispatch();
    const { groupId } = useParams();
    const [pending, setPending] = useState<boolean>(true);
    const [messages, setMessages] = useState<any[]>([]);
    const [groupData, setGroupData] = useState<SidebarGroupData | null>(null);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const userProfile = useAppSelector((state: RootState) => state.user.profile);
    const [membersProfiles, setMembersProfiles] = useState<MemberProfile[]>([]);
    const selectedMessageForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);

    const myMemberProfile = membersProfiles.find((mp) => mp.email == userEmail);
    const messagesListRef = useRef<HTMLDivElement>(null);

    const scrollDownHandler = () => {
        messagesListRef.current?.scrollTo({ top: messagesListRef.current.scrollHeight });
    }

    const seenMessagesHandler = () => {
        if (userEmail && myMemberProfile) {
            runTransaction(db, async (transaction) => {
                transaction.update(doc(db, "group_member", myMemberProfile.groupMemberDocId), {
                    notSeenedMessagesCount: 0
                })
            })
        }
    }

    useEffect(() => {
        if (groupId) {
            const messagesQuery = query(collection(db, "group_message"), where("to", "==", groupId), orderBy("timestamp", "asc"));
            const unsubMessages = onSnapshot(messagesQuery, { includeMetadataChanges: true }, (snapshot) => {
                let messages: any[] = [];
                snapshot.docs.forEach((snap) => {
                    messages = [...messages, { ...snap.data(), id: snap.id }];
                });
                setMessages(messages);
            });

            return () => {
                unsubMessages();
            };
        }
    }, [groupId]);

    useEffect(() => {
        if (groupId) {
            const groupMembersQuery = query(collection(db, "group_member"), where("groupId", "==", groupId))
            const unsubGroupMembers = onSnapshot(groupMembersQuery, { includeMetadataChanges: true }, (snapshot) => {
                let newMembersProfiles: MemberProfile[] = [];
                snapshot.forEach(async (querySnapshot) => {
                    const { removedFromGroup, notSeenedMessagesCount } = querySnapshot.data();
                    const memberEmail = querySnapshot.data().memberEmail;
                    const docRef = doc(db, "profile", memberEmail);
                    const unsub = onSnapshot(docRef, { includeMetadataChanges: true }, (snap) => {
                        newMembersProfiles = [...newMembersProfiles.filter((p) => p.id != memberEmail), {
                            ...snap.data() as Profile,
                            id: memberEmail,
                            email: memberEmail,
                            groupMemberDocId: querySnapshot.id,
                            removedFromGroup,
                            notSeenedMessagesCount
                        }];
                        setMembersProfiles(newMembersProfiles);
                    });
                    return () => unsub();
                });
            });

            return () => {
                unsubGroupMembers();
            }
        }
    }, [groupId])

    useEffect(() => {
        if (groupId && userEmail) {
            const groupDocRef = doc(db, 'group', groupId);
            const unsubGroup = onSnapshot(groupDocRef, { includeMetadataChanges: true }, (snapshot) => {
                const q = query(collection(db, "group_member"), and(
                    where("groupId", "==", groupId),
                    where("memberEmail", "==", userEmail)
                ))
                const unsub = onSnapshot(q, { includeMetadataChanges: true }, (snap) => {
                    const data = snap.docs[0].data() as GroupMember;
                    if (!snap.empty && !data.removedFromGroup) {
                        setGroupData({ ...snapshot.data(), id: snapshot.id } as SidebarGroupData);
                    }
                });

                return () => unsub();
            });
            return () => {
                unsubGroup();
            }
        }
    }, [groupId, userEmail])

    useEffect(() => {
        dispatch(changeSelectedChatOrGroupID(groupId));

        return () => {
            dispatch(changeSelectedChatOrGroupID(null));
        }
    }, [groupId])

    useEffect(() => {
        scrollDownHandler();
    }, [messages.length]);

    useEffect(() => {
        if (groupData && membersProfiles.length) {
            setPending(false);
        }
    }, [groupData, membersProfiles])

    useEffect(() => {
        seenMessagesHandler();
    }, [userEmail, myMemberProfile])

    useEffect(() => {
        if (!pending) scrollDownHandler();
    }, [pending])

    if (groupData && membersProfiles.length) {
        return (
            <div className="w-full flex flex-col h-svh">
                <ImageModal />
                <GroupHeader groupData={groupData} membersProfiles={membersProfiles} />
                <div className={`overflow-auto p-3 md:p-5 max-w-[810px] mx-auto w-full mt-auto scrollbar-hidden transition-all scroll-smooth`}
                    ref={messagesListRef}
                    id="messagesList"
                >
                    {messages.map((m, i) => {
                        const replyToMessage = messages.find((message) => m.replyTo === message.id);
                        const messageSender = membersProfiles.find((p) => p.email == m.from);
                        const currentMessageTimestamp = Timestamp.fromMillis(m.timestamp.seconds * 10 ** 3);
                        const beforeMessageDate = messages[i - 1] && Timestamp.fromMillis(messages[i - 1]?.timestamp.seconds * 10 ** 3).toDate();
                        return (
                            <>
                                {
                                    (!messages[i - 1] || !isSameDay(currentMessageTimestamp.toDate(), beforeMessageDate))
                                    && (
                                        <div className={`text-center ${i == 0 ? "mb-3" : "my-3"} z-40 sticky top-0 text-xs text-natural/60 bg-secondary border rounded-full px-3 py-1.5 w-fit mx-auto font-Inter`}>
                                            {customFormatRelative(currentMessageTimestamp, { today: "'Today'" })}
                                        </div>
                                    )
                                }

                                <Message senderProfile={messageSender}
                                    isGroupMessage={true}
                                    nextMessageSender={messages[i + 1]?.from}
                                    key={m.id} message={m}
                                    scrollDown={scrollDownHandler} replyedMessage={
                                        replyToMessage ? {
                                            ...replyToMessage,
                                            sender: replyToMessage.from === userEmail ? userProfile : membersProfiles.find((p) => p.id == replyToMessage.from)
                                        } : null
                                    } />
                            </>
                        )
                    })}
                    <div className={`${selectedMessageForReply ? "pb-11" : "pb-0"} transition-all`}></div>
                </div>
                <div className="px-3 md:px-5">
                    <div className="mb-3 md:mb-5 mx-auto max-w-[810px]">
                        <ChatInput membersProfiles={membersProfiles} mode="group" groupId={groupId} />
                    </div>
                </div>
            </div>
        )
    } else {
        redirect("/not-found");
    }
}