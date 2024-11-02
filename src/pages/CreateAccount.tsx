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
import toastConf from "../helpers/toastConfig";

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
        };
    }

    const createAccountHandler = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(changeUserData({ email: userCredential.user.email! }));
                dispatch(getUserProfile(userCredential.user.email!)).then(() => {
                    navigate("/");
                })
            }).catch((error) => {
                toast.error(error.message, toastConf);
            }).finally(() => setLoading(false))
    }

    return (
        <div className="flex min-h-svh w-full justify-center items-center">
            <ToastContainer />
            <div className="bg-white rounded-2xl px-10 py-9 w-full max-w-[450px] shadow">
                <h1 className="text-2xl font-bold mb-2 mt-5">Create account</h1>
                <span className="text-sm text-black/60">
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
                        className={button({ intent: "dark", className: "w-full mt-4", size: "large" })} disabled={loading}>
                        Create account <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </button>
                    <Link to={"/login"} className={button({ className: "w-full mt-2", size: "large" })}>
                        I have account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
