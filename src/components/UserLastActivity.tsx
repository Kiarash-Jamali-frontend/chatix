import Profile from "../types/Profile";
import useUserIsOnline from "../hooks/useUserIsOnline";
import { formatRelative, subDays } from "date-fns";
import { Timestamp } from "firebase/firestore";

export default function UserLastActivity({ profile }: { profile: Profile }) {
    const userIsOnline = useUserIsOnline(profile.lastActivity);
    return (
        <>
            {
                userIsOnline ? (
                    <span className="text-blue-500 text-xs font-medium inline-block">
                        Online
                    </span>
                ) : <>
                    <span className="text-xs inline-block text-black/60">
                        {formatRelative(subDays(
                            new Date(Timestamp.fromMillis(profile.lastActivity.seconds * 10 ** 3).toDate()), 0),
                            new Date())}
                    </span>
                </>
            }
        </>
    )
}