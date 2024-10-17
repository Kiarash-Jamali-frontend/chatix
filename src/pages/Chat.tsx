import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import ChatInput from "../components/chat/ChatInput";
import ChatHeader from "../components/chat/ChatHeader";
import {
  and,
  collection,
  doc,
  limit,
  onSnapshot,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../helpers/firebase";
import Message from "../components/chat/Message";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Chat: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.data);
  const { email } = useParams();
  const [profile, setProfile] = useState<any>();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [roomData, setRoomData] = useState<any>();

  useEffect(() => {
    const q = query(
      collection(db, "chat_message"),
      or(
        and(where("from", "==", email), where("to", "==", userData?.email)),
        and(where("to", "==", email), where("from", "==", userData?.email))
      ),
      orderBy("timestamp", "asc")
    );
    const unsubMessages = onSnapshot(q, (snapshot) => {
      let messagesList: Array<any> = [];
      snapshot.forEach((m) => {
        messagesList.push({ ...m.data(), id: m.id });
      });
      setMessages(messagesList);
    });

    return () => {
      unsubMessages();
    };
  }, [email]);

  useEffect(() => {
    const docRef = doc(db, "profile", String(email));
    const unsubProfile = onSnapshot(docRef, (querySnap) => {
      console.log("hi");
      
      setProfile({ ...querySnap.data(), email: querySnap.id });
    });
    return () => {
      unsubProfile();
    }
  }, [email])

  useEffect(() => {
    if (profile) {
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
          setRoomData({ ...r.data(), id: r.id })
        });
      });

      return () => unsubscribe();
    }
  }, [profile]);

  if (profile && roomData) {
    return (
      <div className="w-full max-w-[800px] min-h-screen mx-auto flex flex-col px-5">
        <ChatHeader profile={profile} />
        <div className="h-full flex flex-col justify-end py-5">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
        </div>
        {
          roomData.isBlocked !== "loading" && roomData.blockedFrom === userData?.email && (
            <div className="text-center pb-5 mt-auto">
              <span>
                You have blocked {profile.name}
              </span>
            </div>
          )
        }
        {
          roomData.isBlocked && roomData.blockedFrom === email && (
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
      </div>
    );
  } else {
    redirect("/not-found");
  }
};

export default Chat;
