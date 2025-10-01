import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SidebarGroupData } from "../../redux/slices/groups";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { MemberProfile } from "../../pages/Group";
import GroupInfoModalDefaultContent from "./GroupInfoModalDefaultContent";
import AddMemberForm from "./AddMemberForm";
import { changeOpenedProfile } from "../../redux/slices/openedProfile";
import GroupInfoModalEditContent from "./GroupInfoModalEditContent";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import { ModalContentType } from "./GroupHeader";
import userIsOnline from "../../helpers/usersAndProfiles/userIsOnline";

type PropTypes = {
    groupData: SidebarGroupData;
    membersProfiles: MemberProfile[];
    setIsActive: Dispatch<SetStateAction<boolean>>;
    modalContentType: ModalContentType;
    setModalContentType: Dispatch<SetStateAction<ModalContentType>>;
    groupMembersRecipients: string[];
}

export default function GroupInfoModalContent({ groupData, membersProfiles, setIsActive, modalContentType, setModalContentType, groupMembersRecipients }: PropTypes) {

    const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
    const [membersCount, setMembersCount] = useState<number>(0);

    const openProfileHandler = () => {
        if (groupData.groupPhotoUrl) {
            setIsActive(false);
            dispatch(changeOpenedProfile({
                data: {
                    isCurrentUserProfile: false,
                    profile: groupData.groupPhotoUrl
                },
                hideCallback() {
                    setIsActive(true);
                },
            }))
        }
    }

    const getOnlineMembersCount = useCallback(() => {
        let onlineMembersCount = 0;
        membersProfiles.forEach((p) => {
            userEmail != p.email && !p.removedFromGroup && userIsOnline({
                lastActivity: p.lastActivity,
                isOnline: p.isOnline
            }) && p.showOnlineStatus && (onlineMembersCount = onlineMembersCount + 1);
        });
        setOnlineMembersCount(onlineMembersCount);
    }, [membersProfiles])

    useEffect(() => {
        getOnlineMembersCount();
    }, [getOnlineMembersCount])

    useEffect(() => {
        const unsub = getGroupMembersCount(groupData.id, (snapshot) => {
            setMembersCount(snapshot.size);
        });

        return () => { unsub() }
    }, [])

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div
                        onClick={openProfileHandler}>
                        <ProfileImage name={groupData.groupName}
                            photoUrl={groupData.groupPhotoUrl}
                            size={ProfileImageSizes.LARGE} />
                    </div>
                    <div className="ms-3 flex flex-col">
                        <div className="font-semibold font-Vazir mb-0.5">{groupData.groupName}</div>
                        <div className="text-xs flex items-center text-natural/60">
                            {
                                membersCount ? (
                                    <span>
                                        {membersCount} members
                                    </span>
                                ) : null
                            }
                            {
                                onlineMembersCount ? (
                                    <>
                                        <span className="mx-1">|</span>
                                        <span className="text-primary-600">
                                            {onlineMembersCount} online
                                        </span>
                                    </>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                <button className="size-8 bg-zinc-100 border rounded-full flex items-center justify-center"
                    onClick={() => setIsActive(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
            {
                modalContentType == ModalContentType.DEFAULT && (
                    <GroupInfoModalDefaultContent
                        setModalContentType={setModalContentType}
                        groupData={groupData}
                        membersProfiles={membersProfiles}
                        groupMembersRecipients={groupMembersRecipients} />
                )
            }
            {
                modalContentType == ModalContentType.EDIT_GROUP && (
                    <GroupInfoModalEditContent
                        groupData={groupData}
                        setModalContentType={setModalContentType}
                    />
                )
            }
            {
                modalContentType == ModalContentType.ADD_MEMBER_FORM && (
                    <AddMemberForm
                        membersProfiles={membersProfiles}
                        membersEmails={membersProfiles.filter((m) => !m.removedFromGroup).map((m) => m.email)}
                        setModalContentType={setModalContentType}
                        groupData={groupData} />
                )
            }
        </>
    )
}