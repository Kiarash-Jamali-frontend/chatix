import { Timestamp } from "firebase/firestore";

export default function userIsOnline(lastActivity: any, nowTime?: number) {
    let nowTimeSeconds = nowTime;
    if (!nowTimeSeconds) {
        nowTimeSeconds = Timestamp.now().seconds;
    }
    return nowTimeSeconds - lastActivity.seconds < 65 && nowTimeSeconds !== 0;
}