import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    const updateIsOnline = () => {
        setIsOnline(navigator.onLine);
    }

    useEffect(() => {
        window.addEventListener("offline", () => {
            updateIsOnline();
        });

        window.addEventListener("online", () => {
            updateIsOnline()
        });

        return () => {
            window.removeEventListener("offline", updateIsOnline);
            window.removeEventListener("online", updateIsOnline);
        }
    }, [])

    return isOnline;
}

export default useOnlineStatus;