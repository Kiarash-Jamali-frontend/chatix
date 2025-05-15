import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { SidebarGroupData } from "../../redux/slices/groups";
import { RootState } from "../../redux/store";
import MemberListItem from "../MemberListItem";
import { ModalContentType } from "./GroupInfoModalContent";
import button from "../../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addDoc, and, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import removeAndAddUserGroup from "../../helpers/group/removeAndAddUserGroup";
import { MemberProfile } from "../../pages/Group";

type PropTypes = {
    groupData: SidebarGroupData;
    membersEmails: string[];
    setModalContentType: Dispatch<SetStateAction<ModalContentType>>
    membersProfiles: MemberProfile[]
}

export default function AddMemberForm({ groupData, setModalContentType, membersEmails, membersProfiles }: PropTypes) {

    const chats = useAppSelector((state: RootState) => state.chats.list);
    const [pending, setPending] = useState<boolean>(false);
    const [selectedMembersEmails, setSelectedMembersEmails] = useState<string[]>([]);

    const chatsNotAddedInGroup = chats.filter((c) => !membersEmails.includes(c.email));

    const addToSelectedMembersList = (email: string) => {
        if (selectedMembersEmails.includes(email)) {
            setSelectedMembersEmails((prev) => prev.filter((e) => e != email));
        } else {
            setSelectedMembersEmails((prev) => [...prev, email]);
        }
    }

    const addMembersToGroup = useCallback(() => {
        setPending(true);
        selectedMembersEmails.forEach(async (e) => {
            const q = query(collection(db, "group_member"), and(
                where("memberEmail", "==", e),
                where("groupId", "==", groupData.id)
            ));
            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                const memberProfileDocId = membersProfiles.find((mp) => mp.email == e)?.groupMemberDocId;
                if (memberProfileDocId) {
                    removeAndAddUserGroup(memberProfileDocId, "add");
                }
            } else {
                await addDoc(collection(db, "group_member"), {
                    groupId: groupData.id,
                    memberEmail: e,
                    notSeenedMessagesCount: 0,
                    removedFromGroup: false
                });
            }
        });
        setModalContentType(ModalContentType.DEFAULT);
        setPending(false);
    }, [selectedMembersEmails])

    return (
        <div className="pt-4 border-t mt-4">
            <div className="grid gap-y-1.5 max-h-60 overflow-auto scrollbar-hidden">
                {
                    chatsNotAddedInGroup.map((c, index) => {
                        return (
                            <MemberListItem key={index} callbackFn={addToSelectedMembersList}
                                member={c} isSelected={!!selectedMembersEmails.find((e) => e == c.email)} />
                        )
                    })
                }
            </div>
            {
                !chatsNotAddedInGroup.length && (
                    <div className="text-sm text-natural/60 text-center">
                        All chats added in this group!
                    </div>
                )
            }
            <div className={`grid ${chatsNotAddedInGroup.length ? "grid-cols-2" : "grid-cols-1"} gap-3 mt-4`}>
                <button className={button({ intent: "dark" })}
                    onClick={() => setModalContentType(ModalContentType.DEFAULT)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Back
                </button>
                {
                    chatsNotAddedInGroup.length ? (
                        <button onClick={addMembersToGroup} disabled={!selectedMembersEmails.length || pending}
                            className={button({ intent: "primary" })}>
                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                            Add to group
                        </button>
                    ) : null
                }
            </div>
        </div>
    )
}