import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export default function MessageSeen({ message }: { message: any }) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;

    return (
        <div className={`${messageIsForCurrentUser
            ? "text-white/50"
            : "text-natural/50"
            } relative flex items-center`}>
            {message.seen && (
                <FontAwesomeIcon icon={faCheck} className="size-[0.65rem] translate-x-[0.3rem]" />
            )}
            <FontAwesomeIcon icon={faCheck} className={`size-[0.65rem] ${!message.seen ? "ms-[0.3rem]" : ""}`} />
        </div>
    )
}