import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

const useNowTime = (delay = 5000): number => {
    const [nowTime, setNowTime] = useState<number>(0);
    useEffect(() => {
        const setTimeHandler = setInterval(() => setNowTime(Timestamp.now().seconds), delay);
        return () => {
            clearInterval(setTimeHandler);
        }
    }, []);
    return nowTime;
}

export default useNowTime;