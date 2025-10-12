import { Timestamp } from "firebase/firestore";

export default function userIsOnline({ lastActivity, nowTime, isOnline }: { lastActivity: any, nowTime?: number, isOnline: boolean }) {
    let nowTimeSeconds = nowTime;
    if (!nowTimeSeconds) {
        nowTimeSeconds = Timestamp.now().seconds;
    }
    return isOnline && nowTimeSeconds - lastActivity.seconds < (60+10) && nowTimeSeconds !== 0;
}