import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { auth, db } from "./helpers/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import Loading from "./components/Loading";
import { doc, runTransaction, Timestamp } from "firebase/firestore";
import { changeChatsStatus, getChats } from "./redux/slices/chats";
import { onAuthStateChanged } from "firebase/auth";

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

  useEffect(() => {
    if (user.status === "authenticated") {
      updateLastActivity();
      const interval = setActivityInterval();
      return () =>
        clearInterval(interval);
    }
  }, [user]);

  useLayoutEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      user && dispatch(getUserProfile(user.email!)).then(() => {
        dispatch(changeUserStatus("authenticated"));
        dispatch(getChats(user.email!)).then(() => {
          dispatch(changeChatsStatus("success"));
        })
      });
    });

    dispatch(changeUserStatus(auth.currentUser ? "authenticated" : "unauthenticated"));

    return () => {
      unsub();
    }
  }, []);

  if (user.status === "authenticated" && chatsStatus === "success") {
    return (
      <div className="lg:flex min-h-svh bg-[url('/background.svg')] bg-cover">
        {
          location.pathname !== "/login" && <Sidebar />
        }
        <Outlet />
      </div>
    );
  }

  if (user.status === "unauthenticated") {
    <Navigate to={"/login"} />
  }

  return <Loading />

};

export default Layout;
