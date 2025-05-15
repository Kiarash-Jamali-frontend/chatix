import { Link } from "react-router-dom";
import { SidebarGroupData } from "../../redux/slices/groups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GradiantProfile from "../GradiantProfile";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import userIsOnline from "../../helpers/usersAndProfiles/userIsOnline";
import Modal from "../Modal";
import GroupInfoModalContent from "./GroupInfoModalContent";
import { MemberProfile } from "../../pages/Group";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";

type PropTypes = {
  groupData: SidebarGroupData;
  membersProfiles: MemberProfile[];
}

export default function GroupHeader({ groupData, membersProfiles }: PropTypes) {

  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [membersCount, setMembersCount] = useState<number>(0);
  const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
  const [groupInfoModalIsActive, setGroupInfoModalIsActive] = useState<boolean>(false);

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
  }, [groupData]);

  return (
    <>
      <Modal isActive={groupInfoModalIsActive} setIsActive={setGroupInfoModalIsActive}>
        <GroupInfoModalContent
          groupData={groupData}
          membersProfiles={membersProfiles}
          setIsActive={setGroupInfoModalIsActive} />
      </Modal>
      <div className="flex items-center">
        <div className="bg-white shadow-xs border-b px-4 py-3 w-full flex items-center">
          <Link unstable_viewTransition to={"/"} className="lg:hidden me-3">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Link>
          <div className="flex items-center justify-between grow">
            <div className="flex items-center cursor-pointer grow" onClick={() => setGroupInfoModalIsActive(true)}>
              {groupData.groupPhotoUrl ? (
                <img
                  src={groupData.groupPhotoUrl}
                  alt={"profile"}
                  className="size-12 object-cover rounded-full border"
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
          </div>
        </div>
      </div>
    </>
  );
}