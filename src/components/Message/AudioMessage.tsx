import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { RootState } from "../../redux/store";
import MessagePropTypes from "../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import { faDownload, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import { useCallback, useEffect, useRef, useState } from "react";
import { changeCurrentPlayingMedia } from "../../redux/slices/currentPlayingMedia";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";
import downloadFile from "../../helpers/downloadFile";
import { toast, ToastContainer } from "react-toastify";
import toastConf from "../../../utils/toastConfig";

export default function AudioMessage({ message, isGroupMessage }: MessagePropTypes) {

    const [isStopped, setIsStopped] = useState<boolean>(true);
    const [duration, setDuration] = useState<number>(0);
    const [pending, setPending] = useState<boolean>(false);
    const [progressTime, setProgressTime] = useState<number>(0);

    const currentPlayingMediaID = useAppSelector((state: RootState) => state.currentPlayingMedia.data?.id);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const selectedMessage = useAppSelector((state: RootState) => state.selectedMessage.data);
    const dispatch = useAppDispatch();

    const playAnimationRef = useRef<number | null>(null);
    const audioProgressBarRef = useRef<HTMLInputElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const messageIsSelected = selectedMessage?.id === message.id;
    const messageIsForCurrentUser = userEmail === message.from;
    const isPlaying = message.id === currentPlayingMediaID;

    const changeIsPlayingHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(changeCurrentPlayingMedia(isPlaying ? null : message));
    }

    const downloadFileHandler = () => {
        setPending(true);
        downloadFile(message.content, (errorMsg) => {
            if (errorMsg) {
                toast.error(errorMsg, toastConf);
            }
            setPending(false);
        });
    }

    const setAudioCurrentTimeHandler = () => {
        if (audioRef.current && audioProgressBarRef.current) {
            const newTime = Number(audioProgressBarRef.current.value);
            audioRef.current.currentTime = newTime;
            setProgressTime(newTime);
            audioProgressBarRef.current.style.setProperty(
                '--range-progress',
                `${(newTime / duration) * 100}%`
            );
        }
    }

    const onLoadedMetadata = () => {
        const seconds = audioRef.current?.duration;
        if (seconds) {
            setDuration(seconds);
            if (audioProgressBarRef.current) {
                audioProgressBarRef.current.max = seconds.toString();
            }
        }
    }

    const formatTime = (time: number | undefined): string => {
        if (typeof time === 'number' && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            const formatMinutes = minutes.toString().padStart(2, '0');
            const formatSeconds = seconds.toString().padStart(2, '0');
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    const updateProgress = useCallback(() => {
        if (audioRef.current && audioProgressBarRef.current && duration) {
            const currentTime = audioRef.current.currentTime;
            setProgressTime(currentTime);
            audioProgressBarRef.current.value = currentTime.toString();
            audioProgressBarRef.current.style.setProperty(
                '--range-progress',
                `${(currentTime / duration) * 100}%`
            );
        }
    }, [duration, setProgressTime, audioRef, audioProgressBarRef]);

    const startAnimation = useCallback(() => {
        if (audioRef.current && audioProgressBarRef.current && duration) {
            const animate = () => {
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate);
            };
            playAnimationRef.current = requestAnimationFrame(animate);
        }
    }, [updateProgress, duration, audioRef, audioProgressBarRef]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
            startAnimation();
        } else {
            audioRef.current?.pause();
            if (playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
                playAnimationRef.current = null;
            }
            updateProgress();
        }
        return () => {
            if (playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        };
    }, [isPlaying, startAnimation, updateProgress, audioRef]);

    return (
        <>
            <ToastContainer />
            <div className="flex">
                <audio src={message.content} ref={audioRef} hidden onLoadedMetadata={onLoadedMetadata} onPlay={() => setIsStopped(false)} onPause={() => setIsStopped(true)}></audio>
                <button
                    onBlur={() => dispatch(changeSelectedMessage(null))}
                    onFocus={({ target }) => {
                        const { dataset } = target
                        dataset.isButton != 'true' && (
                            dispatch(changeSelectedMessage(message))
                        )
                    }}
                    className={`${messageIsForCurrentUser
                        ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:opacity-95"
                        : "bg-white hover:bg-gray-50"
                        } ${messageIsSelected ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "!rounded-e-none" : ""}
             w-fit min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative cursor-default ${message.replyTo ? "rounded-b-xl" : "rounded-xl border"}`}
                >
                    <div className="flex relative">
                        <button onClick={changeIsPlayingHandler} data-is-button="true"
                            className={`flex items-center justify-center size-10 rounded-full ${messageIsForCurrentUser ? "bg-white text-blue-500" : "bg-black/5 text-black border shadow-sm"}`}>
                            <FontAwesomeIcon icon={!isStopped ? faPause : faPlay} size="lg" />
                        </button>
                        {
                            !isGroupMessage && (
                                <ReactionsEmojiPicker message={message} />
                            )
                        }
                        <div className="ms-2">
                            <div className="flex items-center">
                                <div className="font-light break-words max-w-44 overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-60 text-sm">{message.fileName}</div>
                                <button onClick={downloadFileHandler}
                                    disabled={pending}
                                    data-is-button="true"
                                    className={`size-6 flex items-center justify-center text-xs rounded-full ms-1 ${messageIsForCurrentUser ? "bg-white/10 text-white" : "bg-black/5 text-black"}`}>
                                    {
                                        pending ? (
                                            <div className="size-3 border border-e-transparent border-white rounded-full animate-spin">

                                            </div>
                                        ) : (
                                            <FontAwesomeIcon icon={faDownload} />
                                        )
                                    }
                                </button>
                            </div>
                            <div className={`flex items-center mt-1 ${messageIsForCurrentUser ? "text-white/60" : "text-black/60"}`}>
                                <span className="text-xs">{formatTime(progressTime)}</span>
                                <input type="range" value={progressTime} onChange={setAudioCurrentTimeHandler} ref={audioProgressBarRef} className="mx-1.5 h-1.5 audio-message-timeline-range-thumb" />
                                <span className="text-xs">{formatTime(duration)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1 flex justify-end">
                        <MessageTime message={message} />
                        {message.from === userEmail && !isGroupMessage && (
                            <MessageSeen message={message} />
                        )}
                    </div>
                </button>
                <DeleteTextFileAudioMessageButton message={message} />
            </div>
        </>
    )
}