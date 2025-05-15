import getHourAndTime from "../../helpers/getHourAndTime";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export default function MessageTime({ message }: { message: any }) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;

    return (
        <div
            className={`text-[10px] ${messageIsForCurrentUser
                ? "text-white/50"
                : "text-natural/50"
                }`}

        >
            {getHourAndTime(message.timestamp)}
        </div>
    )
}