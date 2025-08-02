import { RootState } from "../../redux/store";
import { Parser } from "html-to-react";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import urlify from "../../helpers/urlify";

const TextMessage: React.FC<MessagePropTypes> = ({ message, isGroupMessage, replayMessage }) => {
  const { parse } = Parser();
  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
  const dispatch = useAppDispatch();
  // const { getChatSecret } = useEncryption();

  // const [decryptedContent, setDecryptedContent] = useState<string>("");
  // const [isDecrypting, setIsDecrypting] = useState<boolean>(false);

  const messageIsSelected = selectedMessage?.id === message.id;
  const messageIsForCurrentUser = userEmail === message.from;

  // Handle decryption of encrypted messages
  // useEffect(() => {
  //   const handleDecryption = async () => {
  //     if (isEncryptedMessage(message) && !isGroupMessage) {
  //       setIsDecrypting(true);
  //       try {
  //         const chatSecret = getChatSecret(message.from, message.to);
  //         const decrypted = await decryptMessage(
  //           {
  //             encryptedContent: message.encryptedContent,
  //             iv: message.iv,
  //             salt: message.salt
  //           },
  //           chatSecret
  //         );
  //         setDecryptedContent(decrypted);
  //       } catch (error) {
  //         console.error('Failed to decrypt message:', error);
  //         setDecryptedContent('[Encrypted Message - Unable to decrypt]');
  //       } finally {
  //         setIsDecrypting(false);
  //       }
  //     } else {
  //       // For non-encrypted messages or group messages, use original content
  //       setDecryptedContent(message.content || '');
  //     }
  //   };

  //   handleDecryption();
  // }, [message, isGroupMessage, getChatSecret]);

  return (
    <div className="flex">
      <DeleteTextFileAudioMessageButton replayMessage={replayMessage} message={message} isGroupMessage={isGroupMessage} />
      <button
        onBlur={() => dispatch(changeSelectedMessage(null))}
        onFocus={(e) => {
          e.target.tagName != "A" && (
            dispatch(changeSelectedMessage(message))
          )
        }}
        className={`${messageIsForCurrentUser
          ? "bg-linear-to-br from-primary-400 to-primary-600 text-white"
          : "bg-secondary"
          } ${selectedMessage?.id === message.id ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "rounded-s-none!" : ""}
             w-fit grow min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative`}
      >
        <div className="max-w-[400px] break-all message-text" dir="auto">
          {/* {isDecrypting && !decryptedContent ? (
            <span className="text-gray-500 italic">Loading...</span>
          ) : (
            parse(urlify(decryptedContent))
          )} */}
          {parse(urlify(message.content))}
        </div>
        <div className="mt-1 flex justify-end">
          <MessageTime message={message} />
          {message.from === userEmail && !isGroupMessage && (
            <MessageSeen message={message} />
          )}
        </div>
      </button>
    </div>
  );
};

export default TextMessage;
