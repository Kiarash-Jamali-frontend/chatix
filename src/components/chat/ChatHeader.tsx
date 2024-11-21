import { faUser } from "@fortawesome/free-regular-svg-icons";
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
import { db } from "../../helpers/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Profile from "../../types/Profile";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserLastActivity from "./UserLastActivity";
import useChangeIsBlockingUser from "../../hooks/useChangeIsBlockingUser";
import Modal from "../Modal";
import UserInfoModalContent from "./UserInfoModalContent";

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
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
      <div className="flex items-center mt-4">
        <Link to={"/"} className="lg:hidden me-3">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </Link>
        <div className="bg-white border shadow-sm px-4 py-3 rounded-full w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => setUserInfoModalIsActive(true)}>
              {/*Profile image*/}
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={"profile"}
                  className="size-12 object-cover rounded-full"
                />
              ) : (
                <div className="size-12 border-2 rounded-full bg-base flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </div>
              )}
              <div className="ps-2 flex flex-col">
                <div className="font-semibold mb-1">
                  {profile.name}
                </div>
                <UserLastActivity profile={profile} />
              </div>
            </div>
            {
              chatRoom && (
                (chatRoom.blockedFrom === userData?.email || !chatRoom.isBlocked) && (
                  <button
                    className={button({ intent: chatRoom.isBlocked ? "default" : "danger", className: "!rounded-full" })}
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
