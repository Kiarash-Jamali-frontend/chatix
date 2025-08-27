import Profile from "../types/Profile";
import { formatRelative, subDays } from "date-fns";
import { Timestamp } from "firebase/firestore";
import useUserIsOnline from "../hooks/useUserIsOnline";

export default function UserLastActivity({ profile }: { profile: Profile }) {
    const isOnline = useUserIsOnline({ isOnline: profile.isOnline, lastActivity: profile.lastActivity });
    if (profile.showOnlineStatus != false) {
        return (
            isOnline ? (
                <span className="text-primary-500 text-xs font-medium inline-block">
                    Online
                </span>
            ) : <span className="text-xs inline-block text-natural/60">
                {formatRelative(subDays(
                    new Date(Timestamp.fromMillis(profile.lastActivity.seconds * 10 ** 3).toDate()), 0),
                    new Date())}
            </span>
        )
    }

    return null;
}