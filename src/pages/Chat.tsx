import React, { useEffect, useRef, useState } from "react";
import { redirect, useParams } from "react-router-dom";
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
import { db } from "../../utils/firebase";
import Message from "../components/Message/Message";
import { RootState } from "../redux/store";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ImageModal from "../components/ImageModal";
import { changeSelectedChatOrGroupID } from "../redux/slices/selectedChatOrGroup";
import ChatInput from "../components/ChatInput";

const Chat: React.FC = () => {
  const userData = useAppSelector((state: RootState) => state.user.data);
  const userProfile = useAppSelector((state: RootState) => state.user.profile);
  const selectedMessageForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);
  const { email } = useParams();
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [roomData, setRoomData] = useState<any>();
  const messagesListRef = useRef<HTMLDivElement>(null);

  const scrollDownHandler = () => {
    messagesListRef.current?.scrollTo({ top: messagesListRef.current.scrollHeight });
  }

  useEffect(() => {
    dispatch(changeSelectedChatOrGroupID(email));

    return () => {
      dispatch(changeSelectedChatOrGroupID(null));
    }
  }, [email])

  useEffect(() => {
    // messages
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

    // profile data
    const profileDocRef = doc(db, "profile", String(email));
    const unsubProfile = onSnapshot(profileDocRef, (querySnap) => {
      setProfile({ ...querySnap.data(), email: querySnap.id });
    });

    return () => {
      unsubMessages();
      unsubProfile();
    };
  }, [email]);

  useEffect(() => {
    // if profile is seted get room data
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

  useEffect(() => {
    if (profile && roomData && messages) setPending(false);
  }, [profile, roomData, messages, email]);

  useEffect(() => {
    scrollDownHandler();
  }, [messages.length]);

  useEffect(() => {
    if (!pending) scrollDownHandler();
  }, [pending])

  if (pending) {
    return (
      <Loading />
    )
  }

  if (profile && roomData) {
    return (
      <div className="w-full flex flex-col h-svh">
        <ChatHeader profile={profile} />
        <ImageModal />
        <div className={`overflow-auto p-3 md:p-5 max-w-[810px] mx-auto w-full mt-auto scrollbar-hidden transition-all scroll-smooth`} ref={messagesListRef}>
          {messages.map((m) => {
            const replyToMessage = messages.find((message) => m.replyTo === message.id);
            return (
              <Message key={m.id} message={m} scrollDown={scrollDownHandler} replyedMessage={
                replyToMessage ? {
                  ...replyToMessage,
                  sender: replyToMessage.from === userData?.email ? userProfile : profile
                } : null
              } />
            )
          })}
          {selectedMessageForReply ? <div className="pb-10"></div> : null}
        </div>
        <div>
          {
            roomData.isBlocked && (
              <div className="text-center mt-auto bg-white border py-4 text-sm">
                <span>
                  {
                    roomData.isBlocked !== "loading" && roomData.blockedFrom === userData?.email && "You have blocked"
                  }
                  {
                    roomData.isBlocked && roomData.blockedFrom === email && "You have been blocked by"
                  }
                  {" "}<span className="font-semibold underline underline-offset-2">{profile.name}</span>
                </span>
              </div>
            )
          }
          <div className="px-3 md:px-5 mx-auto max-w-[810px]">
            {
              !roomData.isBlocked && email && (
                <div className="mb-3 md:mb-5">
                  <ChatInput mode="private" chatId={roomData.id} oppositeProfile={profile} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  } else {
    redirect("/not-found");
  }
};

export default Chat;
