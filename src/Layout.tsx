import React, { useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebase";
import { changeUserData, changeUserStatus } from "./redux/slices/user";
import Loading from "./components/Loading";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const userStatus = useAppSelector((state: RootState) => state.user.status);

  useLayoutEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      dispatch(changeUserStatus(user ? "authenticated" : "unauthenticated"));
    });

    return () => {
      unsub();
    }
  }, [])

  if (userStatus !== "loading") {
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
