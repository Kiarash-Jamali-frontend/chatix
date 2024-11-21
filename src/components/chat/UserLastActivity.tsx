import { Timestamp } from "firebase/firestore";
import useNowTime from "../../hooks/useNowTime"
import { formatRelative, subDays } from "date-fns";
import Profile from "../../types/Profile";

export default function UserLastActivity({ profile }: { profile: Profile }) {
    const nowTime = useNowTime();
    return (
        <>
            {
                nowTime - profile.lastActivity.seconds < 65 && nowTime !== 0 ? (
                    <span className="text-blue-500 text-xs font-medium inline-block">
                        Online
                    </span>
                ) : <>
                    <span className="text-xs inline-block text-black/75">
                        {formatRelative(subDays(
                            new Date(Timestamp.fromMillis(profile.lastActivity.seconds * 10 ** 3).toDate()), 0),
                            new Date())}
                    </span>
                </>
            }
        </>
    )
}