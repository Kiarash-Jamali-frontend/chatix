import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import button from "../../cva/button";
import {
  and,
  collection,
  doc,
  getDocs,
  limit,
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
  const [chatRoomID, setChatRoomID] = useState<string>("");

  const getChatRoomID = async () => {
    if (user && user !== "loading") {
      const q = query(
        collection(db, "chat_room"),
        or(
          and(
            where("user_2", "==", profile.phone),
            where("user_1", "==", user.phoneNumber)
          ),
          and(
            where("user_1", "==", profile.phone),
            where("user_2", "==", user.phoneNumber)
          )
        ),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      setChatRoomID(querySnapshot.docs[0].id);
    }
  };

  const blockUserHandler = async () => {
    if (user && user !== "loading") {
      await runTransaction(db, async (transaction) => {
        transaction.set(doc(db, "chat_room", chatRoomID), {
          is_blocked: true,
          blocked_from: user.phoneNumber,
        });
      });
    }
  };

  useEffect(() => {
    getChatRoomID();
  });

  return (
    <div className="bg-white border shadow-sm p-4 rounded-b-xl">
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
        <button
          className={button({ intent: "danger" })}
          onClick={blockUserHandler}
        >
          Block
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
