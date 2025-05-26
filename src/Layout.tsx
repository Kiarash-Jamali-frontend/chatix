import React, { useEffect, useLayoutEffect } from "react";
import 'swiper/css';
import Sidebar from "./components/Sidebar/Sidebar";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { auth, db } from "../utils/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import { and, collection, doc, getDoc, onSnapshot, or, query, runTransaction, setDoc, Timestamp, where } from "firebase/firestore";
import { changeChatsList, changeChatsStatus, ChatsState } from "./redux/slices/chats";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { changeGroupsList, changeGroupsStatus, SidebarGroupData } from "./redux/slices/groups";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OfflineModal from "./components/OfflineModal";
import ProfileModal from "./components/ProfileModal";
import getProfile from "./helpers/usersAndProfiles/getProfile";
import getNotSeenedMessagesCount from "./helpers/chat/getNotSeenedMessagesCount";
import GroupMember from "./types/GroupMember";
import useThemeDetector from "./hooks/useThemeDetector";
import { changeTheme } from "./redux/slices/theme";
import publicRoutes from "./constants/publicRoutes";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user);
  const { value: theme } = useAppSelector((state: RootState) => state.theme);
  const systemThemeIsDark = useThemeDetector();
  const isPublicRoute = publicRoutes.some((v) => v == location.pathname);

  const isOnline = useOnlineStatus();

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

  const getChats = async () => {

    const q = query(
      collection(db, "chat_room"),
      or(
        where("user_1", "==", user.data?.email),
        where("user_2", "==", user.data?.email)
      )
    );
    onSnapshot(q, { includeMetadataChanges: true }, async (querySnapshot) => {
      let chatsList: (ChatsState['list']) = [];
      for (let i = 0; i < querySnapshot.size; i++) {
        const chatData = querySnapshot.docs[i].data();
        const oppositeUserEmail =
          user.data?.email === chatData.user_1
            ? chatData.user_2
            : chatData.user_1;

        const notSeenedMessagesCount = await getNotSeenedMessagesCount(oppositeUserEmail, user.data!.email);
        const profile = await getProfile(oppositeUserEmail);

        chatsList = [...chatsList, {
          ...profile!,
          notSeenedMessages: notSeenedMessagesCount,
          createdAt: chatData.createdAt
        }]
      }
      dispatch(changeChatsList(chatsList));
      dispatch(changeChatsStatus("success"));
    })
  }

  const getGroups = async () => {
    const q = query(
      collection(db, "group_member"),
      and(
        where("memberEmail", "==", user.data?.email),
        where("removedFromGroup", "==", false)
      ),
    );
    onSnapshot(q, { includeMetadataChanges: true }, async (querySnapshot) => {
      let groupsList: SidebarGroupData[] = [];
      for (let i = 0; i < querySnapshot.size; i++) {
        const groupMemberData = querySnapshot.docs[i].data() as GroupMember;
        const groupDocRef = doc(db, "group", groupMemberData.groupId);
        const groupData = (await getDoc(groupDocRef)).data() as SidebarGroupData;
        groupsList = [...groupsList, { ...groupData, id: querySnapshot.docs[i].data().groupId }]
      }
      dispatch(changeGroupsList(groupsList));
      dispatch(changeGroupsStatus("success"));
    })
  }

  const getTheme = () => {
    const themeInLocalStorage = localStorage.getItem("chatix_theme") as "dark" | "light" | null;
    themeInLocalStorage && dispatch(changeTheme(themeInLocalStorage))
  }

  useLayoutEffect(() => {
    // dispatch(changeUserStatus("loading"));
    // dispatch(changeChatsStatus("loading"));
    // dispatch(changeGroupsStatus("loading"));
    getGoogleSigninRedirectResult();
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      if (!user) {
        dispatch(changeUserStatus("unauthenticated"));
        dispatch(changeChatsStatus("userUnauthenticated"));
        dispatch(changeGroupsStatus("userUnauthenticated"));
      }
      user && dispatch(getUserProfile(user.email!)).then(() => {
        dispatch(changeUserStatus("authenticated"));
      });
    });

    return () => {
      unsub();
    }
  }, [isOnline]);

  useEffect(() => {
    if (user.data?.email) {
      getChats();
      getGroups();
    }
  }, [user, isOnline])

  useEffect(() => {
    getTheme();
  }, []);

  if (!isOnline && user?.status == "unauthenticated") {
    return <OfflineModal />
  }

  if (user.status == "unauthenticated" && (!isPublicRoute)) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <div className={`${((systemThemeIsDark && !theme) || theme == "dark") ? "dark" : ""} bg-base lg:flex min-h-svh before:absolute before:inset-0 dark:before:invert-100 before:bg-[url('/background.svg')] before:bg-contain before:bg-repeat before:opacity-20 before:z-0`}>
        <div className="relative z-10 w-full h-full flex">
          <ProfileModal />
          {
            !isPublicRoute && <Sidebar />
          }
          <Outlet />
        </div>
      </div>
    </>
  );

};

export default Layout;
