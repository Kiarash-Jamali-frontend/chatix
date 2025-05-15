import React, { useEffect, useLayoutEffect } from "react";
import 'swiper/css';
import Sidebar from "./components/Sidebar/Sidebar";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { auth, db } from "../utils/firebase";
import { changeUserData, changeUserStatus, getUserProfile, setUserDataAndProfileFromLocalStorage } from "./redux/slices/user";
import Loading from "./components/Loading";
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

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user);
  const chatsStatus = useAppSelector((state: RootState) => state.chats.status);
  const groupsStatus = useAppSelector((state: RootState) => state.groups.status);

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

  const getChatsFromLocalStorage = () => {
    const chatsInLocalStorage = localStorage.getItem("chatix_chats");
    if (chatsInLocalStorage) {
      const parsedChats = JSON.parse(chatsInLocalStorage);
      dispatch(changeChatsList(parsedChats));
      dispatch(changeChatsStatus("cacheLoaded"));
    }
  }

  const getChats = async () => {
    const q = query(
      collection(db, "chat_room"),
      or(
        where("user_1", "==", user.data?.email),
        where("user_2", "==", user.data?.email)
      )
    );
    onSnapshot(q, async (querySnapshot) => {
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

  const getGroupsFromLocalStorage = () => {
    const groupsInLocalStorage = localStorage.getItem("chatix_groups");
    if (groupsInLocalStorage) {
      const parsedGroups = JSON.parse(groupsInLocalStorage);
      dispatch(changeGroupsList(parsedGroups));
      dispatch(changeGroupsStatus("cacheLoaded"));
    }
  }

  const getGroups = async () => {
    const q = query(
      collection(db, "group_member"),
      and(
        where("memberEmail", "==", user.data?.email),
        where("removedFromGroup", "==", false)
      ),
    );
    onSnapshot(q, async (querySnapshot) => {
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

  useLayoutEffect(() => {
    dispatch(setUserDataAndProfileFromLocalStorage());
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
    if (user.data?.email && user.status == "authenticated" && isOnline) {
      getChats();
      getGroups();
    }
  }, [user, isOnline])

  useEffect(() => {
    getChatsFromLocalStorage();
    getGroupsFromLocalStorage();
  }, []);

  if (!isOnline && user.status == "unauthenticated") {
    return <OfflineModal />
  }

  if (
    ([user.status, chatsStatus, groupsStatus].every((v) => v == "cacheLoaded" || v == "success" || v == "authenticated"))
    || ["/login", "/create-account", "/reset-password"].includes(location.pathname)
  ) {
    return (
      <div className="lg:flex min-h-svh before:absolute before:inset-0 before:bg-[url('/background.svg')] before:bg-contain before:bg-repeat before:opacity-20 before:z-0">
        <div className="relative z-10 w-full h-full flex">
          <ProfileModal />
          {
            (location.pathname !== "/login" && location.pathname !== "/create-account" && location.pathname !== "/reset-password") && <Sidebar />
          }
          <Outlet />
        </div>
      </div>
    );
  }

  if (user.status === "unauthenticated") {
    return <Navigate to={"/login"} />
  }

  return <Loading />

};

export default Layout;
