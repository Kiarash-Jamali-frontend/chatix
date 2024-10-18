import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import button from "../../cva/button";
import {
  and,
  collection,
  doc,
  limit,
  onSnapshot,
  or,
  query,
  runTransaction,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Profile from "../../types/Profile";

type PropTypes = {
  profile: Profile & { email: string };
};

const ChatHeader: React.FC<PropTypes> = ({ profile }) => {
  const userData = useSelector((state: RootState) => state.user.data);
  const [chatRoom, setChatRoom] = useState<any>();
  const [nowTime, setNowTime] = useState<number>(0);

  const blockAndUnblockUserHandler = async () => {
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "chat_room", chatRoom.id), {
        isBlocked: !chatRoom.isBlocked,
        blockedFrom: chatRoom.blockedFrom ? "" : userData?.email,
      });
    });
  };

  useEffect(() => {
    const setTimeHandler = setInterval(() => setNowTime(Timestamp.now().seconds), 5000);
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
      clearInterval(setTimeHandler);
      unsubscribe();
    };
  }, [profile]);

  return (
    <div className="bg-white border shadow-sm px-4 py-3 rounded-full mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
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
            <span className="text-sm text-black/75 font-bold">
              {profile.name}
            </span>
            {
              nowTime - profile.lastActivity.seconds < 65 && nowTime !== 0 && (
                <span className="text-blue-500 text-xs font-medium inline-block mt-1">
                  Online
                </span>
              )
            }
          </div>
        </div>
        {
          chatRoom && (
            (chatRoom.blockedFrom === userData?.email || !chatRoom.isBlocked) && (
              <button
                className={button({ intent: chatRoom.isBlocked ? "default" : "danger", className:"!rounded-full" })}
                onClick={blockAndUnblockUserHandler}
              >
                {chatRoom.isBlocked ? "Unblock" : "Block"}
              </button>
            )
          )
        }
      </div>
    </div>
  );
};

export default ChatHeader;
