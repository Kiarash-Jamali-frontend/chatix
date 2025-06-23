import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, validatePassword } from "firebase/auth";
import input from "../cva/input";
import { toast, ToastContainer } from "react-toastify";
import button from "../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { changeUserData, getUserProfile } from "../redux/slices/user";
import toastConf from "../../utils/toastConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Lottie from 'react-lottie-player';
import LoginMessageAnimation from '../lottie/LoginMessageAnimation.json';

const CreateAccount: React.FC = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const auth = getAuth();

    const dispatch = useAppDispatch();

    const validateInputs = async () => {
        setLoading(true);
        const passwordValidation = await validatePassword(auth, password);
        if (!email || !password || !confirmPassword) {
            toast.error('Please enter all feilds!', toastConf);
            setLoading(false);
        } else if (password !== confirmPassword) {
            toast.error("The password must match its repetition", toastConf);
            setLoading(false);
        } else if (!passwordValidation.isValid) {
            toast.error("The password must contain numbers and special characters", toastConf);
            setLoading(false);
        } else {
            createAccountHandler();
        }
    }

    const createAccountHandler = async () => {
        setDoc(doc(db, "profile", email), {
            biography: "",
            name: "New user",
            lastActivity: Timestamp.now(),
            photoUrl: ""
        }).then(() => {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    dispatch(changeUserData({ email }));
                    dispatch(getUserProfile(email)).then(() => {
                        navigate("/");
                    });
                }).catch((error) => {
                    toast.error(error.message, toastConf);
                })
        }).catch((error) => {
            toast.error(error.message, toastConf);
        })
            .finally(() => setLoading(false))
    }

    return (
        <div className="flex min-h-svh w-full justify-center items-center">
            <ToastContainer />
            <div className="dark:bg-base bg-secondary lg:dark:bg-secondary h-full lg:h-auto lg:rounded-2xl lg:border w-full lg:max-w-[900px] grid gap-x-5 grid-cols-1 lg:grid-cols-2 shadow-xl">
                <div className="px-10 py-8 lg:py-9 lg:border-e mt-auto lg:mt-0 max-lg:border-t">
                    <h1 className="text-2xl font-bold mb-2">Create Account</h1>
                    <span className="text-sm text-natural/60">
                        Fill out the form below to create an account
                    </span>
                    <div className="mt-4">
                        <div className="mt-4">
                            <label htmlFor="email" className="text-sm font-medium">Email:</label>
                            <input id="email" type="email" placeholder="Enter your email ..." className={input()} required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="text-sm font-medium">Password: <span className="text-[11px] text-black/60 font-light">(It must contain numbers and special characters)</span></label>
                            <input type="password" id="password" placeholder="Enter your password ..." className={input()}
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password:</label>
                            <input type="password" id="confirmPassword" placeholder="Enter your confirm password ..." className={input()}
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button onClick={validateInputs}
                            className={button({ intent: "primary", className: "w-full mt-4", size: "large" })} disabled={loading}>
                            Create account <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </button>
                        <Link viewTransition to={"/login"} className={button({ className: "w-full mt-2", size: "large" })}>
                            I have account
                        </Link>
                    </div>
                </div>
                <div className="flex lg:pe-5 -order-1 lg:order-2">
                    <Lottie
                        loop
                        className="flex lg:grow w-full h-full m-auto max-h-96"
                        animationData={LoginMessageAnimation}
                        play
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
