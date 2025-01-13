import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import button from "../../cva/button";
import { faClose, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { SidebarGroupData } from "../../redux/slices/groups";
import Profile from "../../types/Profile";
import GradiantProfile from "../GradiantProfile";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";

type PropTypes = {
    groupData: SidebarGroupData;
    membersProfiles: (Profile & { id: string; email: string })[];
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function GroupInfoModalContent({ groupData, membersProfiles, setIsActive }: PropTypes) {

    const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
    const [membersCount, setMembersCount] = useState<number>(0);

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
                {userProfile.biography && (
                    <div className="bg-gray-50 py-2.5 px-4 border text-sm rounded-xl mt-5">
                        <span className="font-medium">Biography: </span>
                        <p className="text-black/75">
                            {userProfile.biography}
                        </p>
                    </div>
                )}
                <div className="bg-gray-50 flex items-center py-2.5 px-4 border text-sm rounded-xl mt-4">
                    <span className="font-medium me-1">Email: </span>
                    <p className="text-black/60">{userProfile.email}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className={button({ intent: "dark" })}>
                        <FontAwesomeIcon icon={faShareNodes} className="me-1.5" />
                        Share
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}