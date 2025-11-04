import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSelectedMessage } from "../../redux/slices/selectedMessage";
import { RootState } from "../../redux/store";
import MessagePropTypes from "../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import { useCallback, useEffect, useRef, useState } from "react";
import { changeCurrentPlayingMedia } from "../../redux/slices/currentPlayingMedia";
import AudioDownloadButton from "./AudioDownloadButton";
import MessageType from "../../types/MessageType";

export default function AudioMessage({ message, type, replayMessage, recipients }: MessagePropTypes) {

    const [isStopped, setIsStopped] = useState<boolean>(true);
    const [duration, setDuration] = useState<number>(0);
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
        const seconds = message.duration || audioRef.current?.duration;
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
                playAnimationRef.current = null;
            }
        };
    }, [isPlaying, startAnimation, updateProgress, audioRef]);

    useEffect(() => {
        return () => {
            dispatch(changeCurrentPlayingMedia(null));
        }
    }, []);

    return (
        <div className="flex">
            <DeleteTextFileAudioMessageButton recipients={recipients} isFile={true} type={type} replayMessage={replayMessage} message={message} />
            <audio src={message.content} ref={audioRef} hidden onLoadedMetadata={onLoadedMetadata}
                onPlay={() => setIsStopped(false)}
                onPause={() => setIsStopped(true)}
                onEnded={() => setIsStopped(true)}></audio>
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
             w-fit grow min-w-32 pt-3 px-3 pb-1.5 text-[0.925em] z-30 text-start transition-all relative cursor-default`}
            >
                <div className="flex relative">
                    <button onClick={changeIsPlayingHandler} onDoubleClick={(e) => {
                        e.stopPropagation();
                    }} data-is-button="true"
                        className={`flex items-center overflow-hidden justify-center size-10 rounded-full relative ${messageIsForCurrentUser ? "bg-white text-blue-500" : "bg-natural/5 text-natural border shadow-xs"}`}>
                        <FontAwesomeIcon icon={faPause} size="lg"
                            className={`absolute transition-all ${isStopped ? "opacity-0 scale-0" : ""}`} />
                        <FontAwesomeIcon icon={faPlay} size="lg"
                            className={`absolute transition-all ${!isStopped ? "opacity-0 scale-0" : ""}`} />
                    </button>
                    <div className="ms-2 grow">
                        <div className="flex items-center">
                            <div className="font-light break-words max-w-52 me-1 overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-60 text-sm">
                                {message.type == "voice" ? "Voice" : message.fileName}
                            </div>
                            <AudioDownloadButton message={message} />
                        </div>
                        <div className={`flex items-center mt-1 ${messageIsForCurrentUser ? "text-white/60" : "text-natural/60"}`}>
                            <span className="text-xs">{formatTime(progressTime)}</span>
                            <input
                                data-is-button="true" type="range" value={progressTime} onChange={setAudioCurrentTimeHandler} ref={audioProgressBarRef}
                                className="mx-1.5 h-1.5 audio-message-timeline-range-thumb w-full"
                                onDoubleClick={(e) => {
                                    e.stopPropagation();
                                }} />
                            <span className="text-xs">{formatTime(duration)}</span>
                        </div>
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