import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
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
  where,
} from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { UserContext } from "../../contexts/UserProvider";

type PropTypes = {
  profile: any;
};

const ChatHeader: React.FC<PropTypes> = ({ profile }) => {
  const user = useContext(UserContext);
  const [chatRoom, setChatRoom] = useState<any>();

  const blockAndUnblockUserHandler = async () => {
    if (user && user !== "loading") {
      await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "chat_room", chatRoom.id), {
          isBlocked: !chatRoom.isBlocked,
          blockedFrom: chatRoom.blockedFrom ? "" : user.email,
        });
      });
    }
  };

  useEffect(() => {
    if (user && user !== "loading") {
      const q = query(
        collection(db, "chat_room"),
        or(
          and(
            where("user_2", "==", profile.email),
            where("user_1", "==", user.email)
          ),
          and(
            where("user_1", "==", profile.email),
            where("user_2", "==", user.email)
          )
        ),
        limit(1)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((r) => {
          setChatRoom({ ...r.data(), id: r.id })
        });
      });

      return () => unsubscribe();
    }
  }, [profile]);

  return (
    <div className="bg-white border shadow-sm p-4 rounded-xl mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/*Profile image*/}
          {profile.image ? (
            <img
              src={profile.image}
              alt={"profile"}
              className="w-[45px] h-[45px] object-cover rounded-full"
            />
          ) : (
            <div className="w-[45px] h-[45px] border-2 rounded-full bg-base flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          )}
          <span className="ps-2 text-sm text-black/75 font-medium">
            {profile.name}
          </span>
        </div>
        {
          chatRoom && user !== "loading" && (
            <>
              {
                (chatRoom.blockedFrom === user?.email || !chatRoom.isBlocked) && (
                  <button
                    className={button({ intent: chatRoom.isBlocked ? "default" : "danger" })}
                    onClick={blockAndUnblockUserHandler}
                  >
                    {chatRoom.isBlocked ? "Unblock" : "Block"}
                  </button>
                )
              }
            </>
          )
        }
      </div>
    </div>
  );
};

export default ChatHeader;