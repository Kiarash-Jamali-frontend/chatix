import { Timestamp } from "firebase/firestore";

type Chat = {
    user_1: string;
    user_2: string;
    createdAt: Timestamp;
}

export default Chat;