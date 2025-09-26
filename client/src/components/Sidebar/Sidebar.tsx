import React, { useState } from "react";
import { app, auth, db, getNewFirestore } from "../../../utils/firebase";
import button from "../../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faGear, faPlus, faShareNodes, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/store";
import ChatListItem from "./ChatListItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SidebarProfileImage from "./SidebarProfileImage";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import canBrowserShareData from "../../helpers/shareWebAPI/canBrowserShareData";
import shareData from "../../helpers/shareWebAPI/shareData";
import toastConf from "../../../utils/toastConfig";
import GroupListItem from "./GroupListItem";
import GradiantProfile from "../GradiantProfile";
import { UserState } from "../../redux/slices/user";
import { AnimatePresence, motion } from "framer-motion";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import SearchBox from "./SearchBox";
import AppUpdateMessage from "./AppUpdateMessage";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import { useEncryption } from "../../hooks/useEncryption";
import { clearIndexedDbPersistence, terminate } from "firebase/firestore";
import { changeChatsList } from "../../redux/slices/chats";
import { changeGroupsList } from "../../redux/slices/groups";
import { changeToSystemDefaultTheme } from "../../redux/slices/theme";
import OneSignal from "react-onesignal";

const Sidebar: React.FC = () => {
  const isOnline = useOnlineStatus();
  const dispatch = useAppDispatch();
  const [logoutPending, setLogoutPending] = useState<boolean>(false);
  const [createMenuIsOpen, setCreateMenuIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const user: UserState = useAppSelector((state: RootState) => state.user);
  const { list: chats, status: chatsStatus } = useAppSelector((state: RootState) => state.chats);
  const { list: groups, status: groupsStatus } = useAppSelector((state: RootState) => state.groups);
  const isConnecting = ([chatsStatus, groupsStatus, user.status].some((v) => v == "loading") || !isOnline);
  const { clearAllSecrets } = useEncryption();

  const location = useLocation();
  const navigate = useNavigate();

  const signoutFromChatix = async () => {
    setLogoutPending(true);
    dispatch(changeChatsList([]));
    dispatch(changeGroupsList([]));
    dispatch(changeToSystemDefaultTheme());
    clearAllSecrets();
    OneSignal.logout();
    localStorage.clear();
    await signOut(auth);
    await terminate(db);
    await clearIndexedDbPersistence(db).then(() => {
      getNewFirestore(app);
      setLogoutPending(false);
      navigate("/login");
    });
  };

  const shareUserProfileHandler = () => {
    const sharedData: ShareData = {
      title: user.profile?.name,
      text: `This is my email, you can create new chat with me in chatix: ${user.data?.email}`
    }
    if (canBrowserShareData(sharedData)) {
      shareData(sharedData);
    } else {
      toast.error("Your browser does not support this feature", toastConf);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className={`w-full relative lg:max-w-[435px] h-svh dark:bg-base bg-secondary dark:lg:bg-secondary border-e flex flex-col shadow-xl ${location.pathname !== "/" && "max-lg:hidden"}`}>
        <AppUpdateMessage isInSidebar />
        {
          isConnecting && (
            <div className="bg-primary-500 py-3 px-4 text-center flex items-center justify-center text-white text-sm">
              <div className="size-4 bg-transparent border border-white rounded-full border-e-transparent animate-spin me-2">

              </div>
              Connecting ...
            </div>
          )
        }
        <div className="px-6 pt-6 pb-4 flex items-center justify-between w-full min-w-0">
          <div className="flex items-center w-full grow min-w-0">
            <div className="relative basis-16 min-w-16">
              {/*Profile image*/}
              {user.profile?.photoUrl && (
                <SidebarProfileImage />
              )}
              {
                user.profile?.name && !user.profile.photoUrl && (
                  <GradiantProfile size={ProfileImageSizes.EXTRA_LARGE} name={user.profile?.name} />
                )
              }
              <Link viewTransition
                to={"/settings"}
                className="absolute bottom-0 right-0 bg-black/85 text-white border-white/30 border rounded-full flex items-center justify-center text-center size-[22px]"
              >
                <FontAwesomeIcon icon={faGear} size="2xs" />
              </Link>
            </div>
            <div className="px-4 min-w-0">
              {/*user name*/}
              <div className="flex items-center">
                <span className="font-bold font-Vazir">
                  {user.profile?.name}
                </span>
                <button className="ms-1 cursor-pointer size-6 flex items-center justify-center bg-zinc-100 border rounded-full"
                  onClick={shareUserProfileHandler}>
                  <FontAwesomeIcon icon={faShareNodes} className="text-natural/85" size="sm" />
                </button>
              </div>
              {/*email*/}
              <div className="text-xs w-full min-w-0 mt-2 text-natural/60 whitespace-nowrap overflow-hidden text-ellipsis break-all">
                {user.data?.email}
              </div>
            </div>
          </div>
          <button className={button()}
            disabled={logoutPending}
            onClick={signoutFromChatix}>
            Logout
          </button>
        </div>
        <SearchBox search={search} setSearch={setSearch} />
        <div className={`flex flex-col grow overflow-auto`}>
          <div className={`grow overflow-auto`}>
            <div className="flex flex-col overflow-auto h-full font-Vazir">
              {chats.map((c, index) => {
                return <ChatListItem chat={c} key={index} search={search} />;
              })}
              {groups.map((g, index) => {
                return <GroupListItem group={g} key={index} search={search} />;
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex items-end">
          <AnimatePresence>
            {
              createMenuIsOpen && (
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                      transform: "scale(1) translate(0px, 0px)"
                    },
                    hide: {
                      opacity: 0,
                      transform: "scale(0.9) translate(50px, 0px)"
                    }
                  }}
                  animate="open" exit="hide" initial="hide"
                  className="bg-whit border me-2 flex flex-col relative shadow-lg rounded-lg w-52 z-10 bg-secondary/75 backdrop-blur-xl"
                  onClick={() => setCreateMenuIsOpen(false)}
                >
                  <Link viewTransition to={"/create-chat"}
                    className="flex items-center w-full relative rounded-t-lg z-10 px-4 py-2 text-sm hover:bg-primary-500 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Create Chat
                  </Link>
                  <Link viewTransition to={"/create-group"}
                    className="flex items-center w-full relative rounded-b-lg z-10 px-4 py-2 text-sm hover:bg-primary-500 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                    Create Group
                  </Link>
                </motion.div>
              )
            }
          </AnimatePresence>
          <div className="relative overflow-hidden">
            <button className="size-12 z-20 cursor-pointer relative rounded-full text-white flex items-center justify-center bg-primary-500"
              onFocus={() => setCreateMenuIsOpen(true)}
              onBlur={() => setCreateMenuIsOpen(false)}
            >
              <FontAwesomeIcon icon={faPlus} size="xl" className={`transition-transform ${createMenuIsOpen ? "rotate-45" : "rotate-0"}`} />
            </button>
            {
              createMenuIsOpen && (
                <div className="absolute inset-0 w-full h-full z-30" onClick={() => setCreateMenuIsOpen(false)}>

                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
