import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { SidebarGroupData } from "../../redux/slices/groups";
import Profile from "../../types/Profile";
import GradiantProfile from "../GradiantProfile";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";
import userIsOnline from "../../helpers/usersAndProfiles/userIsOnline";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import UserLastActivity from "../UserLastActivity";

type PropTypes = {
    groupData: SidebarGroupData;
    membersProfiles: (Profile & { id: string; email: string })[];
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function GroupInfoModalContent({ groupData, membersProfiles, setIsActive }: PropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const chatsList = useAppSelector((state: RootState) => state.chats.list);
    const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
    const [membersCount, setMembersCount] = useState<number>(0);

    const getOnlineMembersCount = useCallback(() => {
        let onlineMembersCount = 0;
        membersProfiles.forEach((p) => {
            userEmail != p.email && userIsOnline(p.lastActivity) && (onlineMembersCount = onlineMembersCount + 1);
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
                                    className="size-14 object-cover rounded-full"
                                />
                            ) : (
                                <GradiantProfile name={groupData.groupName} />
                            )
                        }
                        <div className="ms-3 flex flex-col">
                            <div className="font-semibold mb-0.5 font-Vazir">{groupData.groupName}</div>
                            <div className="text-xs flex items-center text-black/60">
                                {
                                    membersCount && (
                                        <span>
                                            {membersCount} members
                                        </span>
                                    )
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
                <div className="mt-4 grid grid-cols-1 gap-y-4 max-h-40 overflow-auto scrollbar border-t pt-4">
                    {
                        membersProfiles.map((p) => {
                            const chatIsCreated = chatsList.find((c) => c.email === p.email);
                            return (
                                <Link key={p.id}
                                    className={`flex group items-center justify-between ${userEmail == p.email && "pointer-events-none"}`}
                                    to={userEmail == p.email ? "#" : chatIsCreated ? `/chat/${p.email}` : `/create-chat?email=${p.email}`}>
                                    <div className="flex items-center">
                                        <div className="size-12">
                                            {
                                                p.photoUrl ? (
                                                    <img src={p.photoUrl} alt="profile"
                                                        className="size-12 object-cover object-center rounded-full" />
                                                ) : (
                                                    <GradiantProfile name={p.name} size="md" />
                                                )
                                            }
                                        </div>
                                        <div className="ps-3">
                                            <div className="text-sm flex items-center font-medium">{p.name} {groupData.creator == p.email && (
                                                <span className="text-xs text-gray-400 ms-1">| Owner</span>
                                            )}</div>
                                            <UserLastActivity profile={p} />
                                        </div>
                                    </div>
                                    {userEmail != p.email && (
                                        <div className="flex items-center">
                                            <div className="h-0.5 w-0 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:w-4 transition-all bg-gray-400">

                                            </div>
                                            <FontAwesomeIcon icon={faChevronRight}
                                                className="me-3 group-hover:me-2 transition-all text-gray-400" />
                                        </div>
                                    )}
                                </Link>
                            )
                        })
                    }
                </div>

            </motion.div>
        </AnimatePresence>
    )
}