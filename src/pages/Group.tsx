import { useEffect, useRef, useState } from "react";
import { redirect, useParams } from "react-router-dom"
import { changeSelectedChatOrGroupID } from "../redux/slices/selectedChatOrGroup";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SidebarGroupData } from "../redux/slices/groups";
import { and, collection, doc, onSnapshot, orderBy, query, runTransaction, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Loading from "../components/Loading";
import GroupHeader from "../components/group/GroupHeader";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message/Message";
import { RootState } from "../redux/store";
import Profile from "../types/Profile";
import GroupMember from "../types/GroupMember";

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

    const messagesListRef = useRef<HTMLDivElement>(null);

    const scrollDownHandler = () => {
        messagesListRef.current?.scrollTo({ top: messagesListRef.current.scrollHeight });
    }

    const seenMessagesHandler = () => {
        if (userEmail) {
            runTransaction(db, async (transaction) => {
                transaction.update(doc(db, "group_member", userEmail), {
                    notSeenedMessagesCount: 0
                })
            })
        }
    }

    useEffect(() => {
        if (groupId) {
            const messagesQuery = query(collection(db, "group_message"), where("to", "==", groupId), orderBy("timestamp", "asc"));
            const unsubMessages = onSnapshot(messagesQuery, (snapshot) => {
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
            const unsubGroupMembers = onSnapshot(groupMembersQuery, (snapshot) => {
                let newMembersProfiles: MemberProfile[] = [];
                snapshot.forEach(async (querySnapshot) => {
                    const { removedFromGroup, notSeenedMessagesCount } = querySnapshot.data();
                    const memberEmail = querySnapshot.data().memberEmail;
                    const docRef = doc(db, "profile", memberEmail);
                    const unsub = onSnapshot(docRef, (snap) => {
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
            const unsubGroup = onSnapshot(groupDocRef, (snapshot) => {
                const q = query(collection(db, "group_member"), and(
                    where("groupId", "==", groupId),
                    where("memberEmail", "==", userEmail)
                ))
                const unsub = onSnapshot(q, (snap) => {
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
        seenMessagesHandler();
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
        if (!pending) scrollDownHandler();
    }, [pending])

    if (pending) {
        return (
            <Loading />
        )
    }

    if (groupData && membersProfiles.length) {
        return (
            <div className="w-full flex flex-col h-svh">
                <GroupHeader groupData={groupData} membersProfiles={membersProfiles} />
                <div className={`overflow-auto p-3 md:p-5 max-w-[810px] mx-auto w-full mt-auto scrollbar-hidden transition-all scroll-smooth`}
                    ref={messagesListRef}>
                    {messages.map((m) => {
                        const replyToMessage = messages.find((message) => m.replyTo === message.id);
                        const messageSender = membersProfiles.find((p) => p.email == m.from);
                        return (
                            <Message senderProfile={messageSender} isGroupMessage={true} key={m.id} message={m} scrollDown={scrollDownHandler} replyedMessage={
                                replyToMessage ? {
                                    ...replyToMessage,
                                    sender: replyToMessage.from === userEmail ? userProfile : membersProfiles.find((p) => p.id == replyToMessage.from)
                                } : null
                            } />
                        )
                    })}
                    {selectedMessageForReply ? <div className="pb-10"></div> : null}
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