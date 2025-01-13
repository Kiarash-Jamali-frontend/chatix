import userIsOnline from "../helpers/usersAndProfiles/userIsOnline";
import useNowTime from "./useNowTime";

const useUserIsOnline = (lastActivity: any, delay?: number) => {
    const nowTime = useNowTime(delay);

    return userIsOnline(lastActivity, nowTime);
}

export default useUserIsOnline;