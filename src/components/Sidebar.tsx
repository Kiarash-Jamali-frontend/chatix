import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  or,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../helpers/firebase";
import button from "../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [chats, setChats] = useState<Array<any>>([]);

  const getUserProfile = async () => {
    if (user !== "loading" && user) {
      const docRef = doc(db, "profile", user.email!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile({...docSnap.data(), email: docSnap.id});
      } else {
        console.error("Profile not load");
      }
    }
  };

  const getChats = async () => {
    if (user !== "loading" && user) {
      const q = query(
        collection(db, "chat_room"),
        or(
          where("user_1", "==", user.email),
          where("user_2", "==", user.email)
        )
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (c) => {
        const chatData = c.data();
        const oppositeUserEmail =
          user.email === chatData.user_1
            ? chatData.user_2
            : chatData.user_1;
        const docRef = doc(db, "profile", oppositeUserEmail);
        const docSnap = await getDoc(docRef);

        const q = query(
          collection(db, "chat_message"),
          where("from", "==", oppositeUserEmail),
          where("to", "==", user.email),
          where("seen", "==", false)
        );
        const querySnapshot = await getDocs(q);

        setChats((prev) => [
          ...prev,
          {
            ...docSnap.data(),
            email: docSnap.id,
            notSeenedMessages: querySnapshot.size,
          },
        ]);
      });
    }
  };

  const signoutFromChatix = async () => {
    await auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    getUserProfile();
    if (!chats.length) {
      getChats();
    }
  }, [user]);

  if (profile && user && user !== "loading") {
    return (
      <div className="w-full max-w-[325px] h-full min-h-screen bg-white border-e flex flex-col shadow-xl">
        <div className="flex items-center p-6">
          <div className="relative">
            {/*Profile image*/}
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={"profile"}
                className="w-[65px] h-[65px] object-cover rounded-full"
              />
            ) : (
              <div className="w-[65px] h-[65px] border-2 rounded-full bg-base flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} size="xl" />
              </div>
            )}
            <Link
              to={"/edit-profile"}
              className="absolute bottom-0 right-0 bg-black/85 text-white rounded-full flex items-center justify-center text-center w-[22px] h-[22px]"
            >
              <FontAwesomeIcon icon={faPencil} size="2xs" />
            </Link>
          </div>
          <div className="ps-4">
            {/*user name*/}
            <div className="text-sm">{profile.name}</div>
            {/*email*/}
            <div className="text-xs mt-2 text-black/60">
              {profile.email}
            </div>
          </div>
        </div>
        <div>
          {chats.map((c, index) => {
            return <ChatListItem chat={c} key={index} />;
          })}
        </div>
        <div className="p-6 mt-auto">
          <Link
            to={"/create-chat"}
            className={button({ intent: "dark", className: "mb-2 w-full" })}
          >
            Create chat
          </Link>
          <button
            onClick={signoutFromChatix}
            className={button({ className: "w-full" })}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
};

type PropTypes = {
  chat: any;
};

const ChatListItem: React.FC<PropTypes> = ({ chat }) => {
  const [unreadMessagesCount, setUnreadMessagesCount] = useState<number>(0);

  useEffect(() => {
    const q = query(
      collection(db, "chat_message"),
      where("from", "==", chat.email),
      where("seen", "==", false)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUnreadMessagesCount(querySnapshot.size);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Link
        to={`/chat/${chat.email}`}
        className="flex items-center justify-between border-t hover:bg-base text-sm px-5 py-3"
        key={chat.email}
      >
        <div className="flex items-center">
          {/*Profile image*/}
          {chat.image ? (
            <img
              src={chat.image}
              alt={"profile"}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          ) : (
            <div className="w-[40px] h-[40px] border-2 rounded-full bg-base flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          )}
          <div className="ps-2">
            <div>{chat.name}</div>
          </div>
        </div>
        {unreadMessagesCount ? (
          <div className="w-[20px] h-[20px] text-xs font-bold rounded-full bg-red-500 text-white text-center flex items-center justify-center">
            {unreadMessagesCount}
          </div>
        ) : (
          ""
        )}
      </Link>
    </>
  );
};

export default Sidebar;
