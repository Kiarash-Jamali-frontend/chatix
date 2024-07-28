import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatInput from "../components/chat/ChatInput";
import ChatHeader from "../components/chat/ChatHeader";
import {
  and,
  collection,
  doc,
  getDoc,
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
  const navigate = useNavigate();
  const { phone } = useParams();
  const [profile, setProfile] = useState<any>();
  const [messages, setMessages] = useState<Array<any>>([]);

  const getProfileData = async () => {
    const docRef = doc(db, "profile", String(phone));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProfile(docSnap.data());
    }
  };

  useEffect(() => {
    getProfileData();

    if (user && user !== "loading") {
      const q = query(
        collection(db, "chat_message"),
        or(
          and(where("from", "==", phone), where("to", "==", user.phoneNumber)),
          and(where("to", "==", phone), where("from", "==", user.phoneNumber))
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
  }, []);

  if (profile) {
    return (
      <div className="w-full max-w-[800px] min-h-screen mx-auto flex flex-col">
        <ChatHeader profile={profile} />
        <div className="h-full flex flex-col justify-end py-5">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
        </div>
        <ChatInput phone={`${phone}`} />
      </div>
    );
  } else {
    navigate("/not-found");
  }
};

export default Chat;
