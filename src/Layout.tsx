import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./helpers/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import Loading from "./components/Loading";
import { doc, runTransaction, Timestamp } from "firebase/firestore";
import { changeChatsStatus, getChats } from "./redux/slices/chats";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user);
  const chatsStatus = useAppSelector((state: RootState) => state.chats.status);

  const handleOnlineAndOffline = async (lastActivity: any) => {
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "profile", user.data!.email), { lastActivity });
    })
  }

  useEffect(() => {
    if (user.status === "authenticated") {
      const newDate = Timestamp.fromDate(new Date());
      handleOnlineAndOffline(newDate);
      const setActivityHandler = setInterval(() => {
        const newDate = Timestamp.fromDate(new Date());
        handleOnlineAndOffline(newDate);
      }, 30000);
      return () =>
        clearInterval(setActivityHandler);
    }
  }, [user]);

  useLayoutEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      user && dispatch(getUserProfile(user.email!)).then(() => {
        dispatch(getChats(user.email!));
      });
      !user && dispatch(changeChatsStatus("userUnauthenticated"));
      dispatch(changeUserStatus(user ? "authenticated" : "unauthenticated"));
    });

    dispatch(changeUserStatus(auth.currentUser ? "authenticated" : "unauthenticated"));

    return () => {
      unsub();
    }
  }, []);

  if (user.status !== "loading" && chatsStatus !== "loading") {
    return (
      <div className="lg:flex min-h-svh bg-[url('/background.svg')] bg-cover">
        {
          location.pathname !== "/login" && <Sidebar />
        }
        <Outlet />
      </div>
    );
  }

  return <Loading />

};

export default Layout;
