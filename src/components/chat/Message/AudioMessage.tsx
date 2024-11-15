import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeSelectedMessage } from "../../../redux/slices/selectedMessage";
import { RootState } from "../../../redux/store";
import MessagePropTypes from "../../../types/MessagePropTypes";
import DeleteTextFileAudioMessageButton from "./DeleteTextFileAudioMessageButton";
import { faDownload, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import MessageTime from "./MessageTime";
import MessageSeen from "./MessageSeen";
import { useCallback, useEffect, useRef, useState } from "react";
import { changeCurrentPlayingMedia } from "../../../redux/slices/currentPlayingMedia";
import ReactionsEmojiPicker from "./ReactionsEmojiPicker";

export default function AudioMessage({ message }: MessagePropTypes) {

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

    const changeIsPlayingHandler = () => {
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
            <audio src={message.content} ref={audioRef} hidden onLoadedMetadata={onLoadedMetadata}></audio>
            <button
                onBlur={() => dispatch(changeSelectedMessage(null))}
                onFocus={() => dispatch(changeSelectedMessage(message))}
                className={`${messageIsForCurrentUser
                    ? "bg-blue-600 text-white hover:opacity-90"
                    : "bg-white border hover:bg-gray-50"
                    } ${messageIsSelected ? "opacity-90" : ""} ${(messageIsForCurrentUser && messageIsSelected) ? "rounded-e-none" : ""}
             w-fit min-w-32 shadow-sm pt-3 px-3 pb-1.5 text-[0.925em] z-30 rounded-lg text-start transition-all font-Vazir relative cursor-default`}
            >
                <div className="flex relative">
                    <button onClick={changeIsPlayingHandler}
                        className={`flex items-center justify-center size-10 rounded-full ${messageIsForCurrentUser ? "bg-white text-blue-600" : "bg-black/5 text-black border shadow-sm"}`}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
                    </button>
                    <ReactionsEmojiPicker message={message} />
                    <div className="ms-2">
                        <div className="flex items-center">
                            <div className="font-light break-words max-w-60 text-sm">{message.fileName}</div>
                            <a href={message.content} className={`size-6 flex items-center justify-center text-xs rounded-full ms-1 ${messageIsForCurrentUser ? "bg-white/10 text-white" : "bg-black/5 text-black"}`}>
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
                        </div>
                        <div className={`flex items-center mt-1 ${messageIsForCurrentUser ? "text-white/60" : "text-black/60"}`}>
                            <span className="text-xs">{formatTime(progressTime)}</span>
                            <input type="range" value={progressTime} onChange={setAudioCurrentTimeHandler} ref={audioProgressBarRef} className="mx-1.5 h-1.5" />
                            <span className="text-xs">{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-1 flex justify-end">
                    <MessageTime message={message} />
                    {message.from === userEmail && (
                        <MessageSeen message={message} />
                    )}
                </div>
            </button>
            <DeleteTextFileAudioMessageButton message={message} />
        </>
    )
}