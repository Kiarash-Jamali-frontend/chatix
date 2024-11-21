import { doc, runTransaction } from "firebase/firestore";
import { db } from "../helpers/firebase";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const useChangeIsBlockingUser = (chatRoom: any) => {
    const email = useAppSelector((state: RootState) => state.user.data?.email);
    const blockHandler = () => {
        runTransaction(db, async (transaction) => {
            transaction.update(doc(db, "chat_room", chatRoom.id), {
                isBlocked: !chatRoom.isBlocked,
                blockedFrom: chatRoom.blockedFrom ? "" : email,
            });
        });
    }
    if (chatRoom && email) {
        return blockHandler;
    }
    return () => {}
}

export default useChangeIsBlockingUser;