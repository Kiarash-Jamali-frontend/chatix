import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import input from "../cva/input";
import { toast, ToastContainer } from "react-toastify";
import button from "../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { changeUserData, getUserProfile } from "../redux/slices/user";
import toastConf from "../helpers/toastConfig";

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();

  const dispatch = useAppDispatch();

  const validateInputs = () => {
    setLoading(true);
    if (!email || !password) {
      toast.error('Please enter email and password', toastConf);
      setLoading(false);
    } else loginHandler();
  }

  const loginHandler = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(changeUserData({ email: userCredential.user.email! }));
        dispatch(getUserProfile(userCredential.user.email!)).then(() => {
          navigate("/");
        })
      }).catch((error) => {
        toast.error(error.message, toastConf);
      }).finally(() => setLoading(false));
  }

  return (
    <div className="flex min-h-svh w-full justify-center items-center">
      <ToastContainer />
      <div className="bg-white rounded-2xl px-10 py-9 w-full max-w-[450px] shadow">
        <h1 className="text-2xl font-bold mb-2 mt-5">Login</h1>
        <span className="text-sm text-black/60">
          Welcome to <span className="font-bold text-black">Chatix</span>
        </span>
        <div className="mt-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email:</label>
            <input id="email" type="email" placeholder="Enter your email ..." className={input()}
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-sm font-medium">Password:</label>
            <input type="password" id="password" placeholder="Enter your password ..." className={input()}
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={validateInputs}
            className={button({ intent: "dark", className: "w-full mt-4", size: "large" })} disabled={loading}>
            Login to Chatix <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </button>
          <Link to={"/create-account"} className={button({ className: "w-full mt-2", size: "large" })}>
            I don't have account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
