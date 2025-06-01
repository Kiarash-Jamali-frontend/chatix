import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import button from "../../cva/button";
import {
  and,
  collection,
  limit,
  onSnapshot,
  or,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Profile from "../../types/Profile";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserLastActivity from "../UserLastActivity";
import useChangeIsBlockingUser from "../../hooks/useChangeIsBlockingUser";
import Modal from "../Modal";
import UserInfoModalContent from "./UserInfoModalContent";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";

type PropTypes = {
  profile: Profile & { email: string };
};

const ChatHeader: React.FC<PropTypes> = ({ profile }) => {
  const userData = useSelector((state: RootState) => state.user.data);
  const [chatRoom, setChatRoom] = useState<any>();
  const changeIsBlockingUser = useChangeIsBlockingUser(chatRoom);
  const [userInfoModalIsActive, setUserInfoModalIsActive] = useState<boolean>(false);

  useEffect(() => {
    const q = query(
      collection(db, "chat_room"),
      or(
        and(
          where("user_2", "==", profile.email),
          where("user_1", "==", userData?.email)
        ),
        and(
          where("user_1", "==", profile.email),
          where("user_2", "==", userData?.email)
        )
      ),
      limit(1)
    );
    const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      querySnapshot.forEach((r) => {
        setChatRoom({ ...r.data(), id: r.id })
      });
    });

    return () => {
      unsubscribe();
    };
  }, [profile]);

  return (
    <>
      <Modal isActive={userInfoModalIsActive} setIsActive={setUserInfoModalIsActive}>
        <UserInfoModalContent chatRoom={chatRoom} setIsActive={setUserInfoModalIsActive} userProfile={profile} />
      </Modal>
      <div className="flex items-center">
        <div className="bg-secondary shadow-xs border-b px-4 py-3 w-full flex items-center">
          <Link unstable_viewTransition to={"/"} className="lg:hidden me-3">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Link>
          <div className="flex items-center justify-between grow">
            <div className="flex items-center cursor-pointer grow" onClick={() => setUserInfoModalIsActive(true)}>
              {/*Profile image*/}
              <ProfileImage size={ProfileImageSizes.MEDIUM} name={profile.name} photoUrl={profile.photoUrl} />
              <div className="ps-2 flex flex-col">
                <div className="font-semibold mb-0.5 font-Vazir">
                  {profile.name}
                </div>
                <UserLastActivity profile={profile} />
              </div>
            </div>
            {
              chatRoom && (
                (chatRoom.blockedFrom === userData?.email || !chatRoom.isBlocked) && (
                  <button
                    className={button({ intent: chatRoom.isBlocked ? "default" : "danger", size: "small", className: "rounded-full!" })}
                    onClick={changeIsBlockingUser}
                  >
                    {chatRoom.isBlocked ? "Unblock" : "Block"}
                  </button>
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
