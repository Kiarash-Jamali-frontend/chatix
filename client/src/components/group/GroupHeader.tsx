import { Link } from "react-router-dom";
import { SidebarGroupData } from "../../redux/slices/groups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Modal from "../Modal";
import GroupInfoModalContent from "./GroupInfoModalContent";
import { MemberProfile } from "../../pages/Group";
import getGroupMembersCount from "../../helpers/group/getGroupMembersCount";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import { AnimatePresence } from "framer-motion";
import GroupHeaderMenu from "./GroupHeaderMenu";

export type GroupHeaderPropTypes = {
  groupData: SidebarGroupData;
  membersProfiles: MemberProfile[];
  groupMembersRecipients: string[];
}

export enum ModalContentType {
  ADD_MEMBER_FORM,
  // DELETE_GROUP_QUESTION,
  DEFAULT,
  EDIT_GROUP
}

export default function GroupHeader({ groupData, membersProfiles, groupMembersRecipients }: GroupHeaderPropTypes) {

  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [membersCount, setMembersCount] = useState<number>(0);
  const [onlineMembersCount, setOnlineMembersCount] = useState<number>(0);
  const [groupInfoModalIsActive, setGroupInfoModalIsActive] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [modalContentType, setModalContentType] = useState<ModalContentType>(ModalContentType.DEFAULT);

  const getOnlineMembersCount = useCallback(() => {
    let onlineMembersCount = 0;
    membersProfiles.forEach((p) => {
      userEmail != p.email && !p.removedFromGroup && p.isOnline && p.showOnlineStatus && (onlineMembersCount = onlineMembersCount + 1);
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
          modalContentType={modalContentType}
          setModalContentType={setModalContentType}
          groupData={groupData}
          membersProfiles={membersProfiles}
          setIsActive={setGroupInfoModalIsActive} />
      </Modal>
      <div className="flex items-center">
        <div className="bg-secondary shadow-xs border-b px-4 py-3 w-full flex items-center">
          <Link viewTransition to={"/"} className="lg:hidden me-3">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Link>
          <div className="flex items-center justify-between grow">
            <div className="flex items-center cursor-pointer grow" onClick={() => {
              setModalContentType(ModalContentType.DEFAULT);
              setGroupInfoModalIsActive(true);
            }}>
              <ProfileImage name={groupData.groupName}
                photoUrl={groupData.groupPhotoUrl}
                size={ProfileImageSizes.MEDIUM} />
              <div className="ps-2 h-fit">
                <div className="font-semibold mb-0.5 font-Vazir">
                  {groupData.groupName}
                </div>
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
          </div>
          <div>
            {
              <div dir="rtl">
                <div className="relative">
                  <button className="size-9 relative text-lg grid place-items-center rounded-full border-2 cursor-pointer"
                    onFocus={() => setMenuIsOpen(true)}
                    onBlur={() => setMenuIsOpen(false)}
                  >
                    <FontAwesomeIcon icon={faEllipsisV} className={`transition-all absolute ${!menuIsOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                    <FontAwesomeIcon icon={faClose} className={`transition-all absolute ${menuIsOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />

                  </button>
                  {
                    menuIsOpen ? (
                      <div className="absolute inset-0 w-full h-full z-30"
                        onClick={() => setMenuIsOpen(false)}>

                      </div>
                    ) : null
                  }
                </div>
                <AnimatePresence>
                  {
                    menuIsOpen && (
                      <GroupHeaderMenu
                        groupMembersRecipients={groupMembersRecipients}
                        setIsActive={setGroupInfoModalIsActive}
                        setModalContentType={setModalContentType}
                        groupData={groupData} membersProfiles={membersProfiles} />
                    )
                  }
                </AnimatePresence>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}