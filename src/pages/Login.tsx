import React, { useState } from "react";
import input from "../cva/input";
import button from "../cva/button";
import {
  ConfirmationResult,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app, db } from "../helpers/firebase";
import Logo from "../components/Logo";
import { RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const [user, setUser] = useState<ConfirmationResult | null>(null);
  const [countryCode, setCountryCode] = useState<string>("98");
  const [otp, setOtp] = useState<string>("");
  const [loginProcessLevel, setLoginProcessLevel] = useState<0 | 1>(0);

  const sendVerificationCode = async () => {
    setPending(true);
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-verifier",
        {}
      );
      const confirmation = await signInWithPhoneNumber(
        auth,
        `+${countryCode}${phoneNumber}`,
        recaptchaVerifier
      );
      setUser(confirmation);
      setLoginProcessLevel(1);
    } catch (e) {
      console.log(e);
    }
    setPending(false);
  };

  const changeOtpHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberedOTP = Number(e.target.value);
    if (!isNaN(numberedOTP)) {
      setOtp(e.target.value);
    } else {
      e.preventDefault();
    }
  };

  const loginUserHandler = async () => {
    setPending(true);
    try {
      await user?.confirm(otp);
      const docRef = doc(db, "profile", `+${countryCode}${phoneNumber}`);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // Create user profile in db
        await setDoc(doc(db, "profile", `+${countryCode}${phoneNumber}`), {
          phone: `+${countryCode}${phoneNumber}`,
          phone_private: true,
          name: "New user",
          biography: "",
          id: "",
          image: "",
        });
      }
      navigate("/");
    } catch (e) {
      console.error(e);
    }
    setPending(false);
  };

  const backToPrevLoginProcessLevel = () => {
    setOtp("");
    setUser(null);
    setLoginProcessLevel(0);
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="bg-white rounded-xl p-10 w-full max-w-[450px] shadow">
        <div className="border-b pb-7">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold mb-2 mt-5">Login</h1>
        <span className="text-sm text-black/60">
          Welcome to <span className="font-bold text-black">Chatix</span>
        </span>
        {loginProcessLevel === 0 && (
          <div className="mt-4">
            <div>
              <label htmlFor="phoneNumber" className="text-sm text-black/80">
                Phone Number
              </label>
              <div className="flex mt-2">
                <div className="me-1 flex items-center justify-center text-center px-3 text-sm rounded-lg border focus:outline-none bg-gray-200">
                  +
                  <input
                    value={`${countryCode}`}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent w-full max-w-[50px]"
                  />
                </div>
                <input
                  type="number"
                  id="phoneNumber"
                  className={input({ className: "w-full" })}
                  value={phoneNumber}
                  onChange={({ target }) => setPhoneNumber(target.value)}
                />
              </div>
            </div>
            <div id="recaptcha-verifier" className="mt-4"></div>
            <button
              onClick={sendVerificationCode}
              className={button({
                intent: "dark",
                size: "large",
                className: `mt-4 w-full ${
                  pending && "opacity-70 pointer-events-none"
                }`,
              })}
            >
              Send verification code
            </button>
          </div>
        )}
        {loginProcessLevel === 1 && (
          <div className="mt-4">
            <div className="text-sm mb-4 text-black/60">
              OTP sended on {`+98${phoneNumber}`}
            </div>
            <label htmlFor="otp" className="text-sm text-black/80">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              maxLength={6}
              className={input({ className: "text-center" })}
              value={otp}
              onChange={changeOtpHandler}
            />
            <button
              onClick={loginUserHandler}
              className={button({
                intent: "dark",
                size: "large",
                className: `mt-4 w-full ${
                  pending && "opacity-70 pointer-events-none"
                }`,
              })}
            >
              Login
            </button>
            <button
              onClick={backToPrevLoginProcessLevel}
              className={button({
                size: "large",
                className: `mt-2 w-full`,
              })}
            >
              Edit phone number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
