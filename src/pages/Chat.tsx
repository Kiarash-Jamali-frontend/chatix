import React, { useContext, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import ChatInput from "../components/chat/ChatInput";
import ChatHeader from "../components/chat/ChatHeader";
import {
  and,
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../helpers/firebase";
import { UserContext } from "../contexts/UserProvider";
import Message from "../components/chat/Message";

const Chat: React.FC = () => {
  const user = useContext(UserContext);
  const { email } = useParams();
  const [profile, setProfile] = useState<any>();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [roomData, setRoomData] = useState<any>();

  const getProfileData = async () => {
    const docRef = doc(db, "profile", String(email));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProfile({ ...docSnap.data(), email: docSnap.id });
    }
  };

  useEffect(() => {
    getProfileData();

    if (user && user !== "loading") {
      const q = query(
        collection(db, "chat_message"),
        or(
          and(where("from", "==", email), where("to", "==", user.email)),
          and(where("to", "==", email), where("from", "==", user.email))
        ),
        orderBy("timestamp", "asc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let messagesList: Array<any> = [];
        snapshot.forEach((m) => {
          messagesList.push({ ...m.data(), id: m.id });
        });
        setMessages(messagesList);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [email]);

  useEffect(() => {
    if (user && user !== "loading" && profile) {
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
          setRoomData({ ...r.data(), id: r.id })
        });
      });

      return () => unsubscribe();
    }
  }, [profile]);

  if (profile) {
    return (
      <div className="w-full max-w-[800px] min-h-screen mx-auto flex flex-col">
        <ChatHeader profile={profile} />
        <div className="h-full flex flex-col justify-end py-5">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
        </div>
        {
          roomData && (
            <>
              {
                roomData.isBlocked && user !== "loading" && roomData.blockedFrom === user?.email && (
                  <div className="text-center pb-5 mt-auto">
                    <span>
                      You have blocked {profile.name}
                    </span>
                  </div>
                )
              }
              {
                roomData.isBlocked && user !== "loading" && roomData.blockedFrom === email && (
                  <div className="text-center pb-5 mt-auto">
                    <span>
                      You have been blocked by {profile.name}
                    </span>
                  </div>
                )
              }
              {
                !roomData.isBlocked && email && (
                  <ChatInput email={email} />
                )
              }
            </>
          )
        }
      </div>
    );
  } else {
    redirect("/not-found");
  }
};

export default Chat;
