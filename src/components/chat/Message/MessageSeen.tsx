import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

export default function MessageSeen({ message }: { message: any }) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;

    return (
        <>
            <div className={`ms-1 ${messageIsForCurrentUser
                ? "text-white/50"
                : "text-black/50"
                }`}>
                {message.seen && (
                    <FontAwesomeIcon icon={faCheck} width={10} height={10} className="translate-x-[5px]" />
                )}
                <FontAwesomeIcon icon={faCheck} width={10} height={10} />
            </div>
        </>
    )
}