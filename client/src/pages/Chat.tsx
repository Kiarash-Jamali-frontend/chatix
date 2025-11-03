import React, { useContext, useEffect, useRef, useState } from "react";
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
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import Message from "../components/Message/Message";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ImageModal from "../components/ImageModal";
import { changeSelectedChatOrGroupID } from "../redux/slices/selectedChatOrGroup";
import ChatInput from "../components/ChatInput";
import { isSameDay } from "date-fns";
import customFormatRelative from "../helpers/customFormatRelative";
import { AnimatePresence } from "framer-motion";
import { getOneSignalUserIdsFromFirebase } from "../services/notificationService";
import MessageType from "../types/MessageType";
import Modal from "../components/Modal";
import StickerPackModalContent from "../components/StickerPackModalContent";
import { StickerPackModalContext } from "../providers/StickerPackModalProvider";
import { decryptMessage, isEncryptedMessage } from "../utils/crypto";
import { useEncryption } from "../hooks/useEncryption";

const Chat: React.FC = () => {
  const userData = useAppSelector((state: RootState) => state.user.data);
  const userProfile = useAppSelector((state: RootState) => state.user.profile);
  const selectedMessageForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);
  const { email } = useParams();
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [isFirstDecrypting, setIsFirstDecrypting] = useState<boolean>(true);
  const [isDecryptingAll, setIsDecryptingAll] = useState<boolean>(true);
  const [messagesDecrypted, setMessagesDecrypted] = useState<Array<any>>([]);
  const [roomData, setRoomData] = useState<any>();
  const [oneSignalUserIds, setOneSignalUserIds] = useState<string[]>([]);
  const messagesListRef = useRef<HTMLDivElement>(null);

  const { isActive, setIsActive } = useContext(StickerPackModalContext);
  const { getChatSecret } = useEncryption();

  const scrollDownHandler = () => {
    messagesListRef.current?.scrollTo({ top: messagesListRef.current.scrollHeight });
  }

  const getOneSignalUserIdsHandler = async () => {
    const newOneSignalUserIds = await getOneSignalUserIdsFromFirebase(profile.email);
    if (Array.isArray(newOneSignalUserIds)) {
      setOneSignalUserIds(newOneSignalUserIds);
    }
  }

  useEffect(() => {
    dispatch(changeSelectedChatOrGroupID(email));

    return () => {
      dispatch(changeSelectedChatOrGroupID(null));
    }
  }, [email])

  useEffect(() => {
    if (userData?.email) {
      const q = query(
        collection(db, "chat_message"),
        or(
          and(where("from", "==", email), where("to", "==", userData.email)),
          and(where("to", "==", email), where("from", "==", userData.email))
        ),
        orderBy("timestamp", "asc")
      );
      const unsubMessages = onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
        let messagesList: Array<any> = [];
        snapshot.forEach((m) => {
          messagesList.push({ ...m.data(), id: m.id });
        });
        setMessages(messagesList);
      });

      // profile data
      const profileDocRef = doc(db, "profile", String(email));
      const unsubProfile = onSnapshot(profileDocRef, { includeMetadataChanges: true }, (querySnap) => {
        setProfile({ ...querySnap.data(), email: querySnap.id });
      });

      return () => {
        unsubMessages();
        unsubProfile();
      };
    }
  }, [email, userData]);

  // Pre-decrypt all messages
  useEffect(() => {
    const run = async () => {
      if (!messages.length) {
        setMessagesDecrypted([]);
        setIsFirstDecrypting(false);
        setIsDecryptingAll(false);
        return;
      }
      setIsDecryptingAll(true);
      try {
        const decrypted = await Promise.all(messages.map(async (m) => {
          if (isEncryptedMessage(m)) {
            try {
              const secret = getChatSecret(m.from, m.to);
              const content = await decryptMessage({
                encryptedContent: m.encryptedContent,
                iv: m.iv,
                salt: m.salt
              }, secret);
              return { ...m, content };
            } catch {
              return { ...m, content: '[Encrypted Message - Unable to decrypt]' };
            }
          }
          return { ...m };
        }));
        setMessagesDecrypted(decrypted);
      } finally {
        setIsDecryptingAll(false);
        setIsFirstDecrypting(false);
      }
    };
    run();
  }, [messages, getChatSecret]);

  useEffect(() => {
    // if profile is seted get room data
    if (profile) {
      getOneSignalUserIdsHandler();
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

  if (profile && roomData) {
    return (
      <div className={`w-full flex flex-col h-svh`}>
        <Modal isActive={isActive} setIsActive={setIsActive}>
          <StickerPackModalContent setIsActive={setIsActive} />
        </Modal>
        <ChatHeader profile={profile} />
        <ImageModal />
        <div className={`overflow-auto p-3 md:p-5 max-w-[810px] mx-auto w-full mt-auto scrollbar-hidden transition-all scroll-smooth`}
          id="messagesList"
          ref={messagesListRef}>
          {(!isFirstDecrypting || !isDecryptingAll) && (
            <AnimatePresence>
              {messagesDecrypted.map((m, i) => {
                const replyToMessage = messagesDecrypted.find((message) => m.replyTo === message.id);
                const currentMessageTimestamp = Timestamp.fromMillis(m.timestamp.seconds * 10 ** 3);
                const beforeMessageDate = messagesDecrypted[i - 1] && Timestamp.fromMillis(messagesDecrypted[i - 1]?.timestamp.seconds * 10 ** 3).toDate();

                return (
                  <React.Fragment key={m.id}>
                    {
                      (!messagesDecrypted[i - 1] || !isSameDay(currentMessageTimestamp.toDate(), beforeMessageDate))
                      && (
                        <div className={`text-center ${i == 0 ? "mb-3" : "my-3"} z-40 sticky top-0 text-xs text-natural/60 bg-secondary border rounded-full px-3 py-1.5 w-fit mx-auto font-Inter`}>
                          {customFormatRelative(currentMessageTimestamp, { today: "'Today'" })}
                        </div>
                      )
                    }
                    <Message recipients={oneSignalUserIds}
                      type={MessageType.PRIVATE}
                      message={m} scrollDown={scrollDownHandler} replyedMessage={
                        replyToMessage ? {
                          ...replyToMessage,
                          sender: replyToMessage.from === userData?.email ? userProfile : profile
                        } : null
                      } />
                  </React.Fragment>
                )
              })}
            </AnimatePresence>
          )}
          <div className={`${selectedMessageForReply ? "pb-11" : "pb-0"} transition-all`}></div>
        </div>
        <div>
          {
            roomData.isBlocked && (
              <div className="text-center mt-auto bg-secondary border py-4 text-sm">
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
                  <ChatInput type={MessageType.PRIVATE} chatId={roomData.id} oppositeProfile={profile} />
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
