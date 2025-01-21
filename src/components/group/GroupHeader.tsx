import { Link } from "react-router-dom";
import { SidebarGroupData } from "../../redux/slices/groups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GradiantProfile from "../GradiantProfile";
import { useCallback, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import Profile from "../../types/Profile";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import userIsOnline from "../../helpers/usersAndProfiles/userIsOnline";
import Modal from "../Modal";
import GroupInfoModalContent from "./GroupInfoModalContent";

type PropTypes = {
  groupData: SidebarGroupData;
  membersProfiles: (Profile & { id: string; email: string })[];
}

export default function GroupHeader({ groupData, membersProfiles }: PropTypes) {

  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [membersCount, setMembersCount] = useState<number>(0);
  const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
  const [groupInfoModalIsActive, setGroupInfoModalIsActive] = useState<boolean>(false);

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
    const groupMembersQuery = query(collection(db, "group_member"), where("groupId", "==", groupData.id));
    const unsubGroupMembersCount = onSnapshot(groupMembersQuery, (snapshot) => {
      setMembersCount(snapshot.size);
    });

    return () => unsubGroupMembersCount();
  }, []);

  return (
    <>
      <Modal isActive={groupInfoModalIsActive} setIsActive={setGroupInfoModalIsActive}>
        <GroupInfoModalContent
          groupData={groupData}
          membersProfiles={membersProfiles}
          setIsActive={setGroupInfoModalIsActive} />
      </Modal>
      <div className="flex items-center">
        <div className="bg-white shadow-sm border-b px-4 py-3 w-full flex items-center">
          <Link to={"/"} className="lg:hidden me-3">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Link>
          <div className="flex items-center justify-between flex-grow">
            <div className="flex items-center cursor-pointer flex-grow" onClick={() => setGroupInfoModalIsActive(true)}>
              {groupData.groupPhotoUrl ? (
                <img
                  src={groupData.groupPhotoUrl}
                  alt={"profile"}
                  className="size-12 object-cover rounded-full"
                />
              ) : (
                <GradiantProfile name={groupData.groupName} />
              )}
              <div className="ps-2 h-fit">
                <div className="font-semibold mb-0.5 font-Vazir">
                  {groupData.groupName}
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}