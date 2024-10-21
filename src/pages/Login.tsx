import React from "react";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import button from "../cva/button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../helpers/firebase";
import { redirect } from "react-router-dom";

const Login: React.FC = () => {

  const auth = getAuth();

  const signinHandler = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.useDeviceLanguage();
    const result = await signInWithPopup(auth, provider)
    if (result.user.email) {
      const docRef = doc(db, "profile", result.user.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "profile", result.user.email), {
          biography: "",
          lastActivity: Timestamp.fromDate(new Date()),
          name: `New user`,
          photoUrl: ""
        });
      }
      redirect("/");
    }
  }

  return (
    <div className="flex min-h-svh w-full justify-center items-center">
      <div className="bg-white rounded-xl p-10 w-full max-w-[450px] shadow">
        <div className="border-b pb-7">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold mb-2 mt-5">Login</h1>
        <span className="text-sm text-black/60">
          Welcome to <span className="font-bold text-black">Chatix</span>
        </span>
        <button onClick={signinHandler} className={button({ className: "w-full mt-4" })}>
          <FontAwesomeIcon icon={faGoogle} className="size-5 me-2.5" />
          Signin with google
        </button>
      </div>
    </div>
  );
};

export default Login;
