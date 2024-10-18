import { FormEvent, useState } from "react"
import input from "../cva/input";
import button from "../cva/button";
import { addDoc, collection, doc, getDoc, } from "firebase/firestore";
import { db } from "../helpers/firebase";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { redirect } from "react-router-dom";
import { addChat } from "../redux/slices/chats";

export default function CreateChat() {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);
    const [email, setEmail] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const createChatHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        const docRef = doc(db, "profile", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await addDoc(collection(db, "chat_room"), {
                user_1: user.data!.email,
                user_2: email
            });
            dispatch(addChat({ user_1: user.data!.email, user_2: email })).then(() => {
                redirect(`/chat/${email}`);
            });
        } else {
            setError("There is no user with this email");
            setTimeout(() => {
                setError("");
            }, 10000);
        }
        setEmail("");
        setPending(false);
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border p-8 h-fit m-auto w-full max-w-lg">
                <h2 className="font-bold text-2xl">
                    Create chat
                </h2>
                <p className="text-sm mt-3 text-black/60">
                    Enter the desired person's email to create a new chat
                </p>
                {
                    error && (
                        <div className="bg-red-500/5 border text-sm text-red-500 border-red-500/50 rounded-lg p-3 mt-5 flex items-center">
                            <FontAwesomeIcon className="me-2.5 size-5" icon={faXmarkCircle} />
                            {error}
                        </div>
                    )
                }
                <form onSubmit={createChatHandler} className="mt-5">
                    <label htmlFor="">Email:</label>
                    <input type="email" required className={input()} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" disabled={pending} className={button({ intent: "dark", size: "large", className: "w-full mt-5" })}>Create</button>
                </form>
            </div>
        </>
    )
}