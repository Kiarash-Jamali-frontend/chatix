import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, doc, runTransaction, Timestamp } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker, { SuggestionMode, Theme } from "emoji-picker-react";
import { faClose, faMicrophone, faPaperclip, faPaperPlane, faReply, faSquare } from "@fortawesome/free-solid-svg-icons";
import ContentEditable from 'react-contenteditable'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../helpers/files/getFileExt";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeMessageSelectedForReply } from "../redux/slices/messageSelectedForReply";
import { Parser } from "html-to-react";
import { MemberProfile } from "../pages/Group";
import useThemeDetector from "../hooks/useThemeDetector";
import { encryptMessage } from "../utils/crypto";
import { useEncryption } from "../hooks/useEncryption";
import { handlePrivateMessageNotification, handleGroupMessageNotification } from "../services/messageNotificationService";
import { addDraft, changeDraft, getDraft, removeDraft } from "../redux/slices/drafts";
import { useReactMediaRecorder } from "react-media-recorder";
import { toast, ToastContainer } from "react-toastify";
import toastConf from "../../utils/toastConfig";
import MessageType from "../types/MessageType";
import messageCollectionByType from "../constants/messageCollectionByType";

export type ChatInputPropTypes = {
  type: MessageType;
  groupId?: string;
  oppositeProfile?: any;
  chatId?: string;
  membersProfiles?: MemberProfile[];
  groupName?: string;
  groupPhotoUrl?: string;
  groupMembersRecipients?: string[]
};

const ChatInput: React.FC<ChatInputPropTypes> = ({
  oppositeProfile,
  chatId,
  type,
  groupId,
  membersProfiles,
  groupName,
  groupPhotoUrl,
  groupMembersRecipients
}) => {
  const isPrivateChat = type == MessageType.PRIVATE;
  const messageTo = isPrivateChat ? oppositeProfile.email : groupId;

  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data!.email);
  const userProfile = useAppSelector((state: RootState) => state.user.profile);
  const messageSelectedForReply = useAppSelector((state: RootState) => state.messageSelectedForReply.data);
  const theme = useAppSelector((state: RootState) => state.theme.value);
  const systemThemeIsDark = useThemeDetector();
  const dispatch = useAppDispatch();
  const { getChatSecret } = useEncryption();
  const draft = useAppSelector((state: RootState) => getDraft(state, messageTo));
  const { value: draftValue } = Object.values(draft || [])[0] || { value: "", timestamp: undefined };

  const getSupportedAudioFormat = () => {
    if (MediaRecorder.isTypeSupported("audio/webm")) return "audio/webm";
    if (MediaRecorder.isTypeSupported("audio/ogg")) return "audio/ogg";
    if (MediaRecorder.isTypeSupported("audio/wav")) return "audio/wav";
    return "audio/webm";
  };

  const { startRecording, stopRecording, mediaBlobUrl, status, clearBlobUrl } = useReactMediaRecorder({
    audio: true,
    mediaRecorderOptions: {
      mimeType: getSupportedAudioFormat(),
      bitsPerSecond: 128000
    }
  });

  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>(draftValue);
  const [filePending, setFilePending] = useState<boolean>(false);
  const [voiceMessagePending, setVoiceMessagePending] = useState<boolean>(false);
  const [childNodes, setChildsNodes] = useState<Element[]>([]);
  const [textMessagePending, setTextMessagePending] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [recordingTimer, setRecordingTimer] = useState<NodeJS.Timeout | null>(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<boolean | null>(null);

  const messageTextHtmlBody = new DOMParser().parseFromString(messageText, "text/html").body;
  const showSendButton = (messageTextHtmlBody.innerText || childNodes.filter((cn) => cn.tagName == "IMG").length ? true : false);

  const emojiPickerContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pending = textMessagePending || filePending || voiceMessagePending;
  const uploadPending = filePending || voiceMessagePending;

  const checkMicrophonePermission = async () => {
    if (!window.MediaRecorder) {
      setHasMicrophonePermission(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasMicrophonePermission(true);
    } catch (error) {
      setHasMicrophonePermission(false);
    }
  };

  const requestMicrophonePermission = async (): Promise<boolean> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasMicrophonePermission(true);
      return true;
    } catch (error) {
      console.error("Failed to get microphone permission:", error);
      setHasMicrophonePermission(false);
      return false;
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const sendMessageHandler = async () => {
    setEmojiPickerIsOpen(false);
    setTextMessagePending(true);
    setMessageText("");
    removeMessageSelectedForRelpy();

    try {
      let messageData: any = {
        from: userEmail,
        seen: false,
        timestamp: Timestamp.now(),
        to: messageTo,
        type: "text",
        replyTo: messageSelectedForReply?.id || null
      };

      if (isPrivateChat) {
        const chatSecret = getChatSecret(userEmail, oppositeProfile.email);
        const encryptedData = await encryptMessage(messageText.trim(), chatSecret);
        messageData = {
          ...messageData,
          ...encryptedData,
          isEncrypted: true
        };
      } else {
        messageData.content = messageText.trim();
      }

      const docRef = await addDoc(collection(db, messageCollectionByType[type]), messageData);

      if (draft) dispatch(removeDraft(messageTo));

      setTextMessagePending(false);

      let notificationId: string = "";
      if (isPrivateChat && oppositeProfile.notificationSettings?.enabled && userProfile) {
        const result = await handlePrivateMessageNotification({
          id: docRef.id,
          from: messageData.from,
          to: messageData.to,
          type: messageData.type,
          content: messageText,
          timestamp: messageData.timestamp.toDate()
        }, userProfile.name, userProfile?.photoUrl);
        if (result?.success && result.id) notificationId = result.id;
      } else if (groupId && groupName && userProfile && groupMembersRecipients) {
        const result = await handleGroupMessageNotification({
          id: docRef.id,
          from: messageData.from,
          to: messageData.to,
          type: messageData.type,
          content: messageText,
          timestamp: messageData.timestamp.toDate()
        }, userProfile.name, groupId, groupName, groupMembersRecipients,
          groupPhotoUrl);
        if (result?.success && result.id) notificationId = result.id;
      }

      if (notificationId) {
        runTransaction(db, async (transaction) => {
          transaction.update(doc(db, messageCollectionByType[type], docRef.id), {
            notificationId
          })
        })
      }

      setNewNotSeenedMessageForAllGroupMembers();
    } catch (error) {
      console.error('Failed to send encrypted message:', error);
      await addDoc(collection(db, messageCollectionByType[type]), {
        content: messageText.trim(),
        from: userEmail,
        seen: false,
        timestamp: Timestamp.now(),
        to: messageTo,
        type: "text",
        replyTo: messageSelectedForReply?.id || null
      });

      if (draft) dispatch(removeDraft(messageTo));

      setTextMessagePending(false);
    }
  };

  const chooseFileHandler = () => {
    const dt = new DataTransfer();
    if (fileInputRef.current?.files) fileInputRef.current.files = dt.files;
    fileInputRef.current?.click();
  }

  const sendFileHandler = async () => {
    setFilePending(true);
    removeMessageSelectedForRelpy();
    if (fileInputRef.current?.files) {
      let i = 0;
      while (i < fileInputRef.current.files.length) {
        const file = fileInputRef.current.files[i];
        const fileStorageRef = ref(storage,
          `${isPrivateChat ? `chats/${chatId}` : `groups/${groupId}`}/${uuidv4()}.${getFileExt(file.name)}`);
        await uploadBytes(fileStorageRef, file);
        const fileUrl = await getDownloadURL(fileStorageRef);
        let fileType = "";
        if (file.type.startsWith("image")) fileType = "image";
        if (file.type.startsWith("audio")) fileType = "audio";
        if (file.type.startsWith("video")) fileType = "video";
        if (file.type.startsWith("application")) fileType = "file";
        if (file.type.startsWith("text")) fileType = "file";
        const data: any = {
          content: fileUrl,
          from: userEmail,
          seen: false,
          timestamp: Timestamp.now(),
          to: messageTo,
          type: fileType,
          replyTo: messageSelectedForReply?.id || null
        };
        if (fileType === "file" || fileType === "audio") {
          data.fileName = file.name;
          data.fileSize = file.size;
        }
        const docRef = await addDoc(collection(db, messageCollectionByType[type]), data);

        let notificationId: string = "";
        if (isPrivateChat && oppositeProfile.notificationSettings?.enabled && userProfile) {
          const result = await handlePrivateMessageNotification({
            id: docRef.id,
            from: data.from,
            to: data.to,
            type: data.type,
            content: data.content,
            timestamp: data.timestamp.toDate()
          }, userProfile.name, userProfile?.photoUrl);
          if (result?.success && result.id) notificationId = result.id;
        } else if (groupId && groupName && userProfile && groupMembersRecipients) {
          const result = await handleGroupMessageNotification({
            id: docRef.id,
            from: data.from,
            to: data.to,
            type: data.type,
            content: data.content,
            timestamp: data.timestamp.toDate()
          }, userProfile.name, groupId, groupName, groupMembersRecipients,
            groupPhotoUrl);
          if (result?.success && result.id) notificationId = result.id;
        }

        if (notificationId) {
          runTransaction(db, async (transaction) => {
            transaction.update(doc(db, messageCollectionByType[type], docRef.id), {
              notificationId
            })
          })
        }

        i++;
      }
      setFilePending(false);
    }
    setNewNotSeenedMessageForAllGroupMembers();
  }

  const setNewNotSeenedMessageForAllGroupMembers = async () => {
    membersProfiles?.filter((mp) => mp.email != userEmail).forEach((mp) => {
      runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "group_member", mp.groupMemberDocId), {
          notSeenedMessagesCount: mp.notSeenedMessagesCount + 1
        })
      })
    });
  }

  const removeMessageSelectedForRelpy = () => {
    dispatch(changeMessageSelectedForReply(null));
  }

  const handleChangeMessageText = useCallback(
    (value: string, isEmoji: boolean = false) => {
      if (!value || value == "<br>") {
        dispatch(removeDraft(messageTo));
        setMessageText("");
        return;
      }
      setMessageText(prev => {
        const newValue = isEmoji ? `${prev}${value}` : value;
        if (!draftValue || newValue != draftValue) {
          const newDraft = {
            [messageTo]: {
              value: newValue,
              timestamp: +(Date.now() / 1000).toFixed(0)
            },
          };

          dispatch(newValue ? changeDraft(newDraft) : addDraft(newDraft));
        }
        return newValue;
      });
    }, [draft, messageTo])

  const handleStartRecording = async () => {
    setIsRecording(true);
    setEmojiPickerIsOpen(false);
    if (isRecording) {
      return;
    }

    if (!window.MediaRecorder) {
      return;
    }

    if (hasMicrophonePermission === false) {
      const permissionGranted = await requestMicrophonePermission();
      if (!permissionGranted) {
        toast.warn("Microphone permission is required to record voice messages", toastConf);
        return;
      }
    }

    setRecordingDuration(0);
    setVoiceMessagePending(false);

    try {
      startRecording();
    } catch (error) {
      console.error("Failed to start recording:", error);
      setIsRecording(false);
    }
  };

  const handleCancelRecording = () => {
    stopRecording();
    setIsRecording(false);
    setRecordingDuration(0);
    if (recordingTimer) {
      clearInterval(recordingTimer);
      setRecordingTimer(null);
    }
    clearBlobUrl();
  };

  const handleStopRecordingBeforeSendVoiceMessage = () => {
    stopRecording();
    setIsRecording(false);
    setVoiceMessagePending(true);
  }

  const handleSendVoiceMessage = async (mediaBlobUrl: string) => {
    removeMessageSelectedForRelpy();

    if (recordingTimer) {
      clearInterval(recordingTimer);
      setRecordingTimer(null);
    }

    if (recordingDuration <= 0) {
      setVoiceMessagePending(false);
      return;
    }

    try {
      const audioFormat = getSupportedAudioFormat();
      const fileExtension = audioFormat.split('/')[1];
      const fileName = uuidv4() + "." + fileExtension;
      const response = await fetch(mediaBlobUrl);
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: audioFormat });

      const fileStorageRef = ref(storage,
        `${isPrivateChat ? `chats/${chatId}` : `groups/${groupId}`}/${fileName}`);
      await uploadBytes(fileStorageRef, file);
      const fileUrl = await getDownloadURL(fileStorageRef);

      const data = {
        content: fileUrl,
        from: userEmail,
        seen: false,
        timestamp: Timestamp.now(),
        to: messageTo,
        type: "voice",
        fileName: fileName,
        fileSize: file.size,
        duration: recordingDuration,
        replyTo: messageSelectedForReply?.id || null
      };

      const docRef = await addDoc(collection(db, messageCollectionByType[type]), data);
      setVoiceMessagePending(false);

      let notificationId: string = "";
      if (isPrivateChat && oppositeProfile.notificationSettings?.enabled && userProfile) {
        const result = await handlePrivateMessageNotification({
          id: docRef.id,
          from: data.from,
          to: data.to,
          type: data.type,
          content: "Voice message",
          timestamp: data.timestamp.toDate()
        }, userProfile.name, userProfile?.photoUrl);
        if (result?.success && result.id) notificationId = result.id;
      } else if (groupId && groupName && userProfile && groupMembersRecipients) {
        const result = await handleGroupMessageNotification({
          id: docRef.id,
          from: data.from,
          to: data.to,
          type: data.type,
          content: "Voice message",
          timestamp: data.timestamp.toDate()
        }, userProfile.name, groupId, groupName, groupMembersRecipients,
          groupPhotoUrl);
        if (result?.success && result.id) notificationId = result.id;
      }

      if (notificationId) {
        runTransaction(db, async (transaction) => {
          transaction.update(doc(db, messageCollectionByType[type], docRef.id), {
            notificationId
          })
        })
      }

      setNewNotSeenedMessageForAllGroupMembers();

      clearBlobUrl();
    } catch (error) {
      console.error('Failed to send voice message:', error);
      setVoiceMessagePending(false);
    }
  };

  useEffect(() => {
    removeMessageSelectedForRelpy();
    setMessageText(draftValue);
  }, [messageTo]);

  useEffect(() => {
    return () => {
      if (recordingTimer) {
        clearInterval(recordingTimer);
      }
    };
  }, [recordingTimer]);

  useEffect(() => {
    let newChildNodes: Element[] = [];
    for (let i = 0; i < messageTextHtmlBody.children.length; i++) {
      newChildNodes = [...newChildNodes, messageTextHtmlBody.children.item(i)!];
    }
    setChildsNodes(newChildNodes);
  }, [messageText]);

  useEffect(() => {

    if (voiceMessagePending && mediaBlobUrl) {
      handleSendVoiceMessage(mediaBlobUrl);
      return;
    }

    const newRecordingStartTime = Date.now();

    if (status == "recording" && isRecording) {
      const timer = setInterval(() => {
        const currentDuration = Math.floor((Date.now() - newRecordingStartTime) / 1000);
        setRecordingDuration(currentDuration);

        if (currentDuration >= 1800) {
          handleStopRecordingBeforeSendVoiceMessage();
        }
      }, 1000);
      setRecordingTimer(timer);
    }
  }, [status, isRecording, voiceMessagePending, mediaBlobUrl])

  useEffect(() => {
    checkMicrophonePermission();
  }, []);

  useEffect(() => {
    const imgElements =
      emojiPickerContainerRef.current?.getElementsByTagName("img");
    if (imgElements) {
      for (let i = 0; i < imgElements.length; i++) {
        const imgEl = imgElements.item(i);
        if (imgEl) {
          imgEl.crossOrigin = "anonymous";
        }
      }
    }
  }, [emojiPickerIsOpen])

  return (
    <>
      <ToastContainer />
      <div className={`relative flex items-stretch max-h-12`}
        onKeyDown={(e) => {
          if (e.key == "Enter" && !e.shiftKey && !pending) {
            e.preventDefault();
            sendMessageHandler();
          }
        }}>
        <AnimatePresence>
          {emojiPickerIsOpen && (
            <motion.div ref={emojiPickerContainerRef} variants={{
              hide: {
                opacity: 0,
                transform: "scale(0.9) translate(-10px, 20px)"
              },
              open: {
                opacity: 1,
                transform: "scale(1) translate(0px, 0px)"
              }
            }}
              transition={{ duration: 0.2 }} initial="hide" exit="hide" animate="open"
              className="absolute! bottom-14 md:max-w-[calc(100%-1.25rem*2)]! overflow-hidden! shadow-xl rounded-xl! z-50">
              <EmojiPicker open={emojiPickerIsOpen}
                theme={theme == "dark" || (!theme && systemThemeIsDark) ? Theme.DARK : Theme.LIGHT}
                height={300} previewConfig={{ showPreview: false }} lazyLoadEmojis={true} searchDisabled
                suggestedEmojisMode={SuggestionMode.FREQUENT}
                onEmojiClick={(e) => handleChangeMessageText(
                  `<img crossOrigin="anonymous" src="${e.getImageUrl()}" style="display:inline;width:1.4em;height:1.4em" />`,
                  true
                )} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {messageSelectedForReply && (
            <motion.div
              className="ps-3 pe-1 py-1 overflow-hidden absolute w-full z-40 shadow-lg rounded-full bg-linear-to-br from-[#68666E] to-[#3B3A3D]"
              variants={{
                hide: {
                  opacity: 0,
                  top: "0",
                },
                open: {
                  opacity: 1,
                  top: "-100%",
                }
              }} initial="hide" exit="hide" animate="open">
              <div className="flex items-center justify-between font-Vazir">
                <div className="flex items-center text-sm overflow-hidden w-full">
                  <span className="text-white/75 me-1 flex items-center">
                    <FontAwesomeIcon icon={faReply} className="rotate-180 me-1.5" />
                    <span className="me-1 hidden md:inline">Reply</span>{
                      groupId ? (
                        messageSelectedForReply.senderName
                      ) : (
                        messageSelectedForReply.from === userEmail ? "You" : oppositeProfile.name
                      )
                    }:
                  </span>
                  <div dir="auto" className="inline-flex text-white overflow-hidden text-ellipsis whitespace-nowrap">
                    {
                      messageSelectedForReply.type !== "text"
                        ?
                        (
                          <span className="capitalize">{messageSelectedForReply.type}</span>
                        )
                        : (
                          parse(messageSelectedForReply.content.split("<br>").join(""))
                        )
                    }
                  </div>
                </div>
                <button onClick={removeMessageSelectedForRelpy} className="text-white flex items-center p-2">
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grow flex flex-col me-2 relative">
          <div className="px-3 shadow-xs rounded-full border bg-secondary flex items-center grow">
            <button className="me-2 size-7 flex items-center text-natural/50 relative overflow-hidden"
              onClick={() => { !isRecording ? setEmojiPickerIsOpen(prev => !prev) : handleCancelRecording() }}>
              <span className={`absolute transition-all size-5 ${(!emojiPickerIsOpen && !isRecording) ? "opacity-0 scale-0" : ""}`}>
                <FontAwesomeIcon icon={faClose} className="!size-5" />
              </span>
              <span className={`absolute transition-all size-5 ${(emojiPickerIsOpen || isRecording) ? "opacity-0 scale-0" : ""}`}>
                <FontAwesomeIcon icon={faFaceSmile} className="!size-5" />
              </span>
            </button>
            <div dir="auto" className="w-full">
              {
                isRecording ? (
                  <div className="text-sm text-natural/40">
                    Recording: {formatTime(recordingDuration)}
                  </div>
                ) : (
                  <ContentEditable
                    html={messageText ? messageText : ""}
                    onChange={({ target }) => handleChangeMessageText(target.value)}
                    className={`focus:outline-hidden relative before:font-Inter ${!showSendButton ? "before:content-['Message'] before:cursor-text" : "before:content-none"} before:absolute before:text-natural/40 before:left-0 w-full break-all text-sm max-w-none max-h-11 overflow-auto font-Vazir`}
                  />
                )
              }
            </div>
            <div className="ms-2 flex items-center relative size-7">
              {uploadPending ? (
                <div>
                  <div className="size-7 rounded-full border-4 border-r-transparent animate-spin">
                  </div>
                </div>
              ) : (
                <button
                  onClick={chooseFileHandler} disabled={uploadPending || isRecording} className="absolute text-natural/50 right-2">
                  <FontAwesomeIcon icon={faPaperclip} size="lg" />
                </button>
              )}
            </div>
          </div>
        </div>

        <input type="file" id="fileInput" hidden ref={fileInputRef} multiple onChange={sendFileHandler} />

        <button
          className="size-12 min-w-12 disabled:opacity-75 transition-opacity border shadow-xs bg-linear-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center"
          onClick={() => {
            (messageText) ?
              sendMessageHandler() : !isRecording ? handleStartRecording() : handleStopRecordingBeforeSendVoiceMessage()
          }}
          disabled={pending}
        >

          <FontAwesomeIcon icon={faSquare} size="lg"
            className={`absolute ${(isRecording) ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-300`} />

          <FontAwesomeIcon icon={faPaperPlane} size="lg"
            className={`absolute ${!isRecording && messageText ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-300`} />

          <FontAwesomeIcon icon={faMicrophone} size="lg"
            className={`absolute ${!isRecording && !messageText ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-300`} />

        </button>
      </div>
    </>
  );
};

export default ChatInput;