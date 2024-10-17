import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./helpers/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import Loading from "./components/Loading";
import { doc, runTransaction, Timestamp } from "firebase/firestore";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const user = useAppSelector((state: RootState) => state.user);

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
      dispatch(changeUserStatus(user ? "authenticated" : "unauthenticated"));
      user && dispatch(getUserProfile(user.email!));
    });

    return () => {
      unsub();
    }
  }, []);

  if (user.status !== "loading") {
    return (
      <div className="flex">
        {
          navigation.location?.pathname !== "/login" && <Sidebar />
        }
        <Outlet />
      </div>
    );
  }

  return <Loading />

};

export default Layout;
