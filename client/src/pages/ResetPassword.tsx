import { toast, ToastContainer } from "react-toastify";
import input from "../cva/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import button from "../cva/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../utils/firebase";
import toastConf from "../../utils/toastConfig";
import AppUpdateMessage from "../components/Sidebar/AppUpdateMessage";

export default function ResetPassword() {

    const [emailIsSended, setEmailIsSended] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const sendVerificationEmail = () => {
        setPending(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setEmailIsSended(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, toastConf);
            }).finally(() => {
                setPending(false);
            })
    }

    return (
        <>
            <div className="flex min-h-svh w-full justify-center items-center">
                <AppUpdateMessage />
                <ToastContainer />
                <div className="bg-secondary border rounded-2xl px-10 py-9 w-full max-w-[450px] shadow-xl">
                    <h1 className="text-2xl font-bold mb-2">Reset password</h1>
                    <span className="text-sm text-natural/60">
                        {
                            !emailIsSended ? "Enter your email to send verification email to reset your password" : `Verification email sent to ${email}`
                        }
                    </span>
                    <div className="mt-4">
                        {
                            !emailIsSended ? (
                                <>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium">Email:</label>
                                        <input id="email" type="email" placeholder="Enter your email ..." className={input()}
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <button onClick={sendVerificationEmail}
                                        className={button({ intent: "primary", className: "w-full mt-4", size: "large" })} disabled={pending}>
                                        Send verification email  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                    <Link viewTransition to={"/login"} className={button({ className: "w-full mt-2", size: "large" })}>
                                        I have account
                                    </Link>
                                </>
                            ) : (
                                <div className="flex justify-center">
                                    <Link viewTransition to={"/login"} className="text-sm text-natural/75 hover:underline">
                                        After change password click here
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}