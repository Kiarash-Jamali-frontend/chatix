import React, { useEffect, useLayoutEffect } from "react";
import 'swiper/css';
import Sidebar from "./components/Sidebar/Sidebar";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { auth, db } from "../utils/firebase";
import { changeUserData, changeUserStatus, getUserProfile } from "./redux/slices/user";
import { and, collection, disableNetwork, doc, enableNetwork, getDoc, onSnapshot, or, query, runTransaction, setDoc, Timestamp, where } from "firebase/firestore";
import { changeChatsList, changeChatsStatus, ChatsState } from "./redux/slices/chats";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { changeGroupsList, changeGroupsStatus, SidebarGroupData } from "./redux/slices/groups";
import useOnlineStatus from "./hooks/useOnlineStatus";
import ProfileModal from "./components/ProfileModal";

import GroupMember from "./types/GroupMember";
import useThemeDetector from "./hooks/useThemeDetector";
import { changeTheme } from "./redux/slices/theme";
import publicRoutes from "./constants/publicRoutes";
import { Unsubscribe } from "firebase/firestore";
// import NotificationBanner from "./components/NotificationBanner";
import { Draft, setDraftsList } from "./redux/slices/drafts";
import { changeFontSize } from "./redux/slices/fontSize";
import getDefaultShowOnlineStatus from "./helpers/getDefaultShowOnlineStatus";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user);
  const { value: theme } = useAppSelector((state: RootState) => state.theme);
  const { size: fontSize } = useAppSelector((state: RootState) => state.fontSize);
  const systemThemeIsDark = useThemeDetector();
  const isPublicRoute = publicRoutes.some((v) => v == location.pathname);
  const { status: chatsStatus } = useAppSelector((state: RootState) => state.chats);
  const { status: groupsStatus } = useAppSelector((state: RootState) => state.groups);
  const isOnline = useOnlineStatus();
  const isConnecting = ([chatsStatus, groupsStatus, user.status].some((v) => v == "loading") || !isOnline);

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

  const getFontSize = () => {
    const fontSize = localStorage.getItem("chatix_font_size");
    if (fontSize && typeof fontSize == 'number') {
      dispatch(changeFontSize(fontSize));
    }
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
          photoUrl: "",
          showOnlineStatus: false
        });
      }
      redirect("/");
    }
  }

  const getDrafts = () => {
    const drafts = localStorage.getItem("chatix_drafts");
    const parsedDrafts: Draft[] = drafts ? JSON.parse(drafts) : [];
    dispatch(setDraftsList(parsedDrafts));
  }

  useEffect(() => {
    if (user.status === "authenticated") {
      updateLastActivity();
      const interval = setActivityInterval();
      return () =>
        clearInterval(interval);
    }
  }, [user]);

  const getChats = () => {
    let profileUnsubs: Unsubscribe[] = [];

    const q = query(
      collection(db, "chat_room"),
      or(
        where("user_1", "==", user.data?.email),
        where("user_2", "==", user.data?.email)
      )
    );

    const chatUnsub = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      // Clean up previous subscriptions
      profileUnsubs.forEach(unsub => unsub());
      profileUnsubs = [];

      if (!querySnapshot.size) {
        dispatch(changeChatsStatus("success"));
        return;
      }

      let chatsList: (ChatsState['list']) = [];
      const oppositeUserEmails: string[] = [];

      // Extract opposite user emails from chat rooms
      querySnapshot.forEach((docSnap) => {
        const chatData = docSnap.data();
        const oppositeUserEmail =
          user.data?.email === chatData.user_1
            ? chatData.user_2
            : chatData.user_1;

        oppositeUserEmails.push(oppositeUserEmail);
      });

      oppositeUserEmails.forEach((oppositeUserEmail) => {
        const profileDocRef = doc(db, "profile", oppositeUserEmail);
        const profileUnsub = onSnapshot(profileDocRef, (profileDoc) => {
          if (profileDoc.exists()) {
            const profile = profileDoc.data();
            console.log(profile);


            // Find the chat data for this user
            const chatDoc = querySnapshot.docs.find(doc => {
              const chatData = doc.data();
              return (user.data?.email === chatData.user_1 && oppositeUserEmail === chatData.user_2) ||
                (user.data?.email === chatData.user_2 && oppositeUserEmail === chatData.user_1);
            });

            if (chatDoc) {
              const chatData = chatDoc.data();

              // Update chats list with real-time data
              chatsList = [
                ...chatsList.filter(chat => chat.email !== oppositeUserEmail),
                {
                  name: profile.name || "",
                  photoUrl: profile.photoUrl || "",
                  lastActivity: profile.lastActivity,
                  biography: profile.biography || "",
                  email: oppositeUserEmail,
                  createdAt: chatData.createdAt,
                  showOnlineStatus: getDefaultShowOnlineStatus(profile.showOnlineStatus)
                }
              ];

              dispatch(changeChatsList([...chatsList]));
              dispatch(changeChatsStatus("success"));
              localStorage.setItem("chatix_has_cache_data", "true");
            }

          }
        });
        profileUnsubs.push(profileUnsub);
      });
    });

    return () => {
      chatUnsub();
      profileUnsubs.forEach(unsub => unsub());
    };
  }

  const getGroups = () => {
    let groupUnsubs: Unsubscribe[] = [];

    const q = query(
      collection(db, "group_member"),
      and(
        where("memberEmail", "==", user.data?.email),
        where("removedFromGroup", "==", false),
      ),
    );

    const groupMemberUnsub = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      let groupsList: SidebarGroupData[] = [];
      let groupIds: string[] = [];

      groupUnsubs.forEach(unsub => unsub());
      groupUnsubs = [];

      querySnapshot.forEach((docSnap) => {
        const groupMemberData = docSnap.data() as GroupMember;
        groupIds.push(groupMemberData.groupId);
      });

      if (!querySnapshot.size) {
        dispatch(changeGroupsStatus("success"));
      }

      groupIds.forEach((groupId) => {
        const groupDocRef = doc(db, "group", groupId);
        const unsub = onSnapshot(groupDocRef, (groupDoc) => {
          if (groupDoc.exists()) {
            const groupData = groupDoc.data() as SidebarGroupData;
            groupsList = [
              ...groupsList.filter(g => g.id !== groupId),
              { ...groupData, id: groupId }
            ];
            dispatch(changeGroupsList([...groupsList]));
            dispatch(changeGroupsStatus("success"));
            localStorage.setItem("chatix_has_cache_data", "true");
          }
        });
        groupUnsubs.push(unsub);
      });
    });

    return () => {
      groupMemberUnsub();
      groupUnsubs.forEach(unsub => unsub());
    };
  };

  const getTheme = () => {
    const themeInLocalStorage = localStorage.getItem("chatix_theme") as "dark" | "light" | null;
    themeInLocalStorage && dispatch(changeTheme(themeInLocalStorage))
  }

  useLayoutEffect(() => {
    getGoogleSigninRedirectResult();
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(changeUserData(user?.email ? { email: user.email } : null));
      if (!user) {
        dispatch(changeUserStatus("unauthenticated"));
        dispatch(changeChatsStatus("userUnauthenticated"));
        dispatch(changeGroupsStatus("userUnauthenticated"));
        localStorage.clear();
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
      const cleanupChats = getChats();
      const cleanupGroups = getGroups();
      return () => {
        cleanupChats && cleanupChats();
        cleanupGroups && cleanupGroups();
      };
    }
  }, [user, isOnline]);

  useEffect(() => {
    const hasCacheData = localStorage.getItem("chatix_has_cache_data");
    if (isConnecting && hasCacheData == "true") {
      disableNetwork(db);
    } else {
      enableNetwork(db);
    }
  }, [isConnecting]);

  useEffect(() => {
    getTheme();
    getFontSize();
    getDrafts();
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${String(fontSize)}px`;
  }, [fontSize])

  // if (!isOnline && user?.status == "unauthenticated") {
  //   return <OfflineModal />
  // }

  if (user.status == "unauthenticated" && (!isPublicRoute)) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      {/* <NotificationBanner /> */}
      <div
        className={`${((systemThemeIsDark && !theme) || theme == "dark") ? "dark" : ""} bg-base lg:flex min-h-svh before:absolute before:inset-0 dark:before:invert-100 before:bg-[url('/background.svg')] before:bg-contain before:bg-repeat before:opacity-20 before:z-0`}>
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
