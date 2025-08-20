import Profile from "../types/Profile";
import { formatRelative, subDays } from "date-fns";
import { Timestamp } from "firebase/firestore";

export default function UserLastActivity({ profile }: { profile: Profile }) {
    if (profile.showOnlineStatus != false) {
        return (
            profile.isOnline ? (
                <span className="text-primary-500 text-xs font-medium inline-block">
                    Online
                </span>
            ) : <>
                <span className="text-xs inline-block text-natural/60">
                    {formatRelative(subDays(
                        new Date(Timestamp.fromMillis(profile.lastActivity.seconds * 10 ** 3).toDate()), 0),
                        new Date())}
                </span>
            </>
        )
    }

    return null;
}