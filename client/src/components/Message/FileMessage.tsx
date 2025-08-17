import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { RootState } from "../../redux/store";
import MessagePropTypes from "../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import getFileSizeByMB from "../../helpers/files/getFileSizeByMB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import downloadFile from "../../helpers/downloadFile";
import { toast } from "react-toastify";
import toastConf from "../../../utils/toastConfig";
import MessageType from "../../types/MessageType";

export default function FileMessage({ message, type, replayMessage, recipients }: MessagePropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
    const dispatch = useAppDispatch();

    const [pending, setPending] = useState<boolean>(false);

    const messageIsSelected = selectedMessage?.id === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    const downloadFileHandler = () => {
        setPending(true);
        downloadFile(message.content, (errorMsg) => {
            if (errorMsg) {
                toast.error(errorMsg, toastConf);
            }
            setPending(false);
        });
    }

    return (
        <div className="flex">
            <DeleteTextFileAudioMessageButton recipients={recipients} isFile={true} type={type} replayMessage={replayMessage} message={message} />
            <button
                onBlur={() => dispatch(changeSelectedMessage(null))}
                onFocus={({ target }) => {
                    const { dataset } = target
                    dataset.isButton != 'true' && (
                        dispatch(changeSelectedMessage(message))
                    )
                }}
                className={`${messageIsForCurrentUser
                    ? "bg-linear-to-br from-primary-400 to-primary-600 text-white"
                    : "bg-secondary"
                    } ${messageIsSelected ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "rounded-s-none!" : ""}
             w-fit min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative cursor-default`}
            >
                <div className="flex relative">
                    <button
                        data-is-button="true"
                        disabled={pending}
                        onClick={downloadFileHandler}
                        className={`flex items-center justify-center disabled:opacity-100! size-10 rounded-full ${messageIsForCurrentUser ? "bg-white text-primary-500  border-primary-500" : "bg-natural/5 text-natural border-natural border shadow-xs"}`}>
                        {
                            pending ? (
                                <div
                                    className="size-6 border-e-transparent border-2 rounded-full animate-spin"
                                ></div>
                            ) : (
                                <FontAwesomeIcon icon={faDownload} />
                            )
                        }
                    </button>
                    <div className="ms-2">
                        <div className="font-light break-words max-w-48 overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-60 mb-0.5 text-sm">{message.fileName}</div>
                        <div className={`text-xs ${messageIsForCurrentUser ? "text-white/60" : "text-black/50"}`}>{getFileSizeByMB(message.fileSize)} Mb</div>
                    </div>
                </div>
                <div className="mt-1 flex justify-end">
                    <MessageTime message={message} />
                    {message.from === userEmail && type == MessageType.PRIVATE && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
        </div>
    )
}