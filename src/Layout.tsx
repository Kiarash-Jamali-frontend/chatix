import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { auth, db } from "./helpers/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import Loading from "./components/Loading";
import { doc, getDoc, runTransaction, setDoc, Timestamp } from "firebase/firestore";
import { changeChatsStatus, getChats } from "./redux/slices/chats";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user);
  const chatsStatus = useAppSelector((state: RootState) => state.chats.status);

  const updateLastActivity = async () => {
    const newDate = Timestamp.now();
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "profile", user.data!.email), { lastActivity: newDate });
    })
  }

  const setActivityInterval = () => {
    return setInterval(() => {
      updateLastActivity();
    }, 30000);
  }

  const getGoogleSigninRedirectResult = async () => {
    const result = await getRedirectResult(auth);
    if (result?.user.email) {
      const docRef = doc(db, "profile", result.user.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "profile", result.user.email), {
          biography: "",
          lastActivity: Timestamp.now(),
          name: `New user`,
          photoUrl: ""
        });
      }
      redirect("/");
    }
  }

  useEffect(() => {
    if (user.status === "authenticated") {
      updateLastActivity();
      const interval = setActivityInterval();
      return () =>
        clearInterval(interval);
    }
  }, [user]);

  useLayoutEffect(() => {
    getGoogleSigninRedirectResult();
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      if (!user) {
        dispatch(changeUserStatus("unauthenticated"));
        dispatch(changeChatsStatus("userUnauthenticated"));
      }
      user && dispatch(getUserProfile(user.email!)).then(() => {
        dispatch(changeUserStatus("authenticated"));
        dispatch(getChats(user.email!)).then(() => {
          dispatch(changeChatsStatus("success"));
        })
      });
    });

    return () => {
      unsub();
    }
  }, []);

  if ((user.status === "authenticated" && chatsStatus === "success") || location.pathname === "/login" || location.pathname === "/create-account") {
    return (
      <div className="lg:flex min-h-svh bg-[url('/background.svg')] bg-cover">
        {
          (location.pathname !== "/login" && location.pathname !== "/create-account" && location.pathname !== "/reset-password") && <Sidebar />
        }
        <Outlet />
      </div>
    );
  }

  if (user.status === "unauthenticated") {
    return <Navigate to={"/login"} />
  }

  return <Loading />

};

export default Layout;
