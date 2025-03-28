import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SidebarGroupData } from "../../redux/slices/groups";
import GradiantProfile from "../GradiantProfile";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";
import userIsOnline from "../../helpers/usersAndProfiles/userIsOnline";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { MemberProfile } from "../../pages/Group";
import GroupInfoModalDefaultContent from "./GroupInfoModalDefaultContent";
import AddMemberForm from "./AddMemberForm";
import { changeOpenedProfile } from "../../redux/slices/openedProfile";

type PropTypes = {
    groupData: SidebarGroupData;
    membersProfiles: MemberProfile[];
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export enum ModalContentType {
    ADD_MEMBER_FORM,
    // DELETE_GROUP_QUESTION,
    DEFAULT,
    EDIT_GROUP
}

export default function GroupInfoModalContent({ groupData, membersProfiles, setIsActive }: PropTypes) {

    const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
    const [membersCount, setMembersCount] = useState<number>(0);
    const [modalContentType, setModalContentType] = useState<ModalContentType>(ModalContentType.DEFAULT);

    const openProfileHandler = () => {
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

    const getOnlineMembersCount = useCallback(() => {
        let onlineMembersCount = 0;
        membersProfiles.forEach((p) => {
            userEmail != p.email && !p.removedFromGroup && userIsOnline(p.lastActivity) && (onlineMembersCount = onlineMembersCount + 1);
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
        <AnimatePresence>
            <motion.div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
                variants={{
                    hide: {
                        opacity: 0,
                        transform: "translateY(25px)"
                    },
                    open: {
                        opacity: 1,
                        transform: "translateY(0px)"
                    }
                }} transition={{ duration: 0.35 }}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {
                            groupData.groupPhotoUrl ? (
                                <img
                                    src={groupData.groupPhotoUrl}
                                    alt={"profile"}
                                    className="size-14 object-cover rounded-full cursor-pointer border"
                                    onClick={openProfileHandler}
                                />
                            ) : (
                                <GradiantProfile name={groupData.groupName} />
                            )
                        }
                        <div className="ms-3 flex flex-col">
                            <div className="font-semibold font-Vazir mb-0.5">{groupData.groupName}</div>
                            <div className="text-xs flex items-center text-black/60">
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
                                            <span className="text-blue-600">
                                                {onlineMembersCount} online
                                            </span>
                                        </>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                    <button className="size-8 bg-gray-100 border rounded-full flex items-center justify-center"
                        onClick={() => setIsActive(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                {
                    modalContentType == ModalContentType.DEFAULT && (
                        <GroupInfoModalDefaultContent
                            setModalContentType={setModalContentType}
                            groupData={groupData}
                            membersProfiles={membersProfiles} />
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
            </motion.div>
        </AnimatePresence>
    )
}