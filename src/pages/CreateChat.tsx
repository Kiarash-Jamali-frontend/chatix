import { FormEvent, useLayoutEffect, useState } from "react"
import input from "../cva/input";
import button from "../cva/button";
import { addDoc, collection, doc, getDoc, Timestamp, } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { addChat } from "../redux/slices/chats";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CreateChat() {

    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const createChatHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        const docRef = doc(db, "profile", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const timestamp = Timestamp.now();
            await addDoc(collection(db, "chat_room"), {
                user_1: user.data!.email,
                user_2: email,
                isBlocked: false,
                blockedFrom: "",
                createdAt: timestamp
            });
            dispatch(addChat({ user_1: user.data!.email, user_2: email, timestamp })).then(() => {
                navigate(`/chat/${email}`);
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

    useLayoutEffect(() => {
        const emailParam = searchParams.get("email")
        emailParam && setEmail(emailParam);
    }, [])

    return (
        <>
            <div className="bg-white lg:rounded-xl shadow-sm lg:border p-8 h-fit m-auto w-full lg:max-w-lg max-lg:h-full max-lg:min-h-svh flex flex-col">
                <div className="flex items-center">
                    <Link unstable_viewTransition to={"/"} className="lg:hidden me-3">
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </Link>
                    <h2 className="font-bold text-2xl text-neutral-800">
                        Create chat
                    </h2>
                </div>
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
                <form onSubmit={createChatHandler} className="mt-5 flex-grow flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required className={input()} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="mt-auto">
                        <button type="submit" disabled={pending} className={button({ intent: "primary", size: "large", className: "w-full mt-5" })}>Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}