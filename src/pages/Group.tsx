import { useEffect, useRef, useState } from "react";
import { redirect, useParams } from "react-router-dom"
import { changeSelectedChatOrGroupID } from "../redux/slices/selectedChatOrGroup";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SidebarGroupData } from "../redux/slices/groups";
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Loading from "../components/Loading";
import GroupHeader from "../components/group/GroupHeader";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message/Message";
import { RootState } from "../redux/store";
import Profile from "../types/Profile";

export default function Group() {

    const dispatch = useAppDispatch();
    const { groupId } = useParams();
    const [pending, setPending] = useState<boolean>(true);
    const [messages, setMessages] = useState<any[]>([]);
    const [groupData, setGroupData] = useState<SidebarGroupData | null>(null);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const userProfile = useAppSelector((state: RootState) => state.user.profile);
    const [membersProfiles, setMembersProfiles] = useState<(Profile & { id: string; email: string })[]>([]);
    const selectedMessageForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);

    const messagesListRef = useRef<HTMLDivElement>(null);

    const scrollDownHandler = () => {
        messagesListRef.current?.scrollTo({ top: messagesListRef.current.scrollHeight });
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

            const groupMembersQuery = query(collection(db, "group_member"), where("groupId", "==", groupId));
            const unsubGroupMembers = onSnapshot(groupMembersQuery, (snapshot) => {
                snapshot.forEach(async (querySnapshot) => {
                    const memberEmail = querySnapshot.data().memberEmail;
                    const docRef = doc(db, "profile", memberEmail);
                    const docSnap = await getDoc(docRef);
                    const data =  docSnap.data() as Profile;
                    setMembersProfiles((prev) => [...prev, { ...data, id: memberEmail, email: memberEmail }])
                });
            })

            const groupDocRef = doc(db, 'group', groupId)
            const unsubGroup = onSnapshot(groupDocRef, (snapshot) => {
                const data = snapshot.data() as Omit<SidebarGroupData, "id">;
                setGroupData({ ...data, id: snapshot.id });
                setPending(false);
            });

            return () => {
                unsubGroup();
                unsubMessages();
                unsubGroupMembers();
            };
        }
    }, [groupId]);

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
        if (!pending) scrollDownHandler();
    }, [pending])

    if (pending) {
        return (
            <Loading />
        )
    }

    if (groupData) {
        return (
            <div className="w-full flex flex-col h-svh">
                <GroupHeader groupData={groupData} membersProfiles={membersProfiles} />
                <div className={`overflow-auto p-5 max-w-[810px] mx-auto w-full mt-auto scrollbar-hidden transition-all scroll-smooth`}
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
                <div className="mb-5">
                    <div className="px-5 mx-auto max-w-[810px]">
                        <ChatInput mode="group" groupId={groupId} />
                    </div>
                </div>
            </div>
        )
    } else {
        redirect("/not-found");
    }
}