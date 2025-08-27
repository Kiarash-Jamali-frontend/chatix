import userIsOnline from "../helpers/usersAndProfiles/userIsOnline";
import useNowTime from "./useNowTime";

const useUserIsOnline = ({ lastActivity, delay, isOnline }: { lastActivity: any, delay?: number, isOnline: boolean }) => {
    const nowTime = useNowTime(delay);

    return userIsOnline({ lastActivity, nowTime, isOnline });
}

export default useUserIsOnline;