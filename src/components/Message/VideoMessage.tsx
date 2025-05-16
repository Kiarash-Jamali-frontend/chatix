// Work on it (has problem!)

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import deleteMessage from "../../helpers/messages/deleteMessage";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import MessagePropTypes from "../../types/MessagePropTypes";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { useEffect, useRef, useState } from "react";
import { changeCurrentPlayingMedia } from "../../redux/slices/currentPlayingMedia";
import { BigPlayButton, ControlBar, ForwardControl, PlaybackRateMenuButton, Player, PlayToggle, ReplayControl, ProgressControl, CurrentTimeDisplay, DurationDisplay, TimeDivider, VolumeMenuButton, PlayerReference } from "video-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import downloadFile from "../../helpers/downloadFile";
import { toast, ToastContainer } from "react-toastify";
import toastConf from "../../../utils/toastConfig";

type PropTypes = MessagePropTypes & {
    scrollDown: () => void;
}

export default function VideoMessage({ message, scrollDown, isGroupMessage }: PropTypes) {

    const videoRef = useRef<PlayerReference>(null);

    const [pending, setPending] = useState<boolean>(false);

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessageID = useAppSelector((state: RootState) => state.selectedMessage.data?.id);
    const currentPlayingMediaID = useAppSelector((state: RootState) => state.currentPlayingMedia.data?.id);

    const dispatch = useAppDispatch();

    const messageIsSelected = selectedMessageID === message.id;
    const messageIsForCurrentUser = userEmail === message.from;

    const playVideoHandler = () => {
        dispatch(changeCurrentPlayingMedia(message));
    }

    const downloadVideoHandler = () => {
        setPending(true);
        downloadFile(message.content, (errorMsg) => {
            if (errorMsg) {
                toast.error(errorMsg, toastConf);
            }
            setPending(false);
        })
    }

    useEffect(() => {
        if (currentPlayingMediaID === message.id) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [currentPlayingMediaID])

    return (
        <>
            <ToastContainer />
            <button
                className={`${messageIsForCurrentUser
                    ? "bg-linear-to-br from-primary-400 to-primary-600 text-white"
                    : "bg-secondary"
                    }
               w-fit min-w-32 p-3 text-[0.925em] z-30 text-start transition-all font-light`}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                onBlur={() => dispatch(changeSelectedMessage(null))}
            >
                <div className="relative">
                    <div className={`absolute z-50 top-4 right-3 flex transition-all ${!messageIsSelected ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}>
                        {
                            messageIsForCurrentUser && (
                                <button
                                    onClick={() => deleteMessage(message.id, isGroupMessage)}
                                    className={`font-Inter ${!messageIsSelected ? "pointer-events-none" : ""} me-2 text-xs font-medium shadow-md border py-1.5 px-2 flex items-center justify-center bg-secondary hover:bg-zinc-50 text-natural rounded-full`}>
                                    <FontAwesomeIcon icon={faTrashCan} className="me-1" />
                                    Delete
                                </button>
                            )
                        }
                        <button
                            onClick={downloadVideoHandler}
                            className={`font-Inter ${!messageIsSelected ? "pointer-events-none" : ""} text-xs font-medium shadow-md border py-1.5 px-2 flex items-center justify-center bg-secondary hover:bg-zinc-50 text-natural rounded-full`}>
                            {
                                pending ? (
                                    <div className="size-3 border border-e-transparent border-black rounded-full animate-spin">

                                    </div>
                                ) : (
                                    <FontAwesomeIcon icon={faDownload} />
                                )
                            }
                            <span className="ms-1">
                                {pending ? "Downloading ..." : "Download"}
                            </span>
                        </button>
                    </div>
                    <div className="rounded-lg overflow-hidden block w-[280px] sm:w-[350px] md:w-[400px]">
                        <Player
                            src={message.content}
                            preload="auto"
                            ref={videoRef}
                            fluid={true}
                            onLoadStart={scrollDown}
                            onPlay={playVideoHandler}
                        >
                            <BigPlayButton position="center" className="z-10" />
                            <ControlBar disableDefaultControls>
                                <PlayToggle />
                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                <CurrentTimeDisplay />
                                <TimeDivider />
                                <DurationDisplay />
                                <ProgressControl />
                                <VolumeMenuButton vertical={true} />
                                <ReplayControl seconds={10} />
                                <ForwardControl seconds={10} />
                            </ControlBar>
                        </Player>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <MessageTime message={message} />
                        {message.from === userEmail && !isGroupMessage && (
                            <MessageSeen message={message} />
                        )}
                    </div>
                </div>
            </button>
        </>
    )
}