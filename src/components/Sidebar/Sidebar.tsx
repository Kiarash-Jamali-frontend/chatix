import React, { useState } from "react";
import { auth } from "../../helpers/firebase";
import button from "../../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/store";
import ChatListItem from "./ChatListItem";
import { useAppSelector } from "../../redux/hooks";
import SidebarProfileImage from "./SidebarProfileImage";
import { signOut } from "firebase/auth";

const Sidebar: React.FC = () => {
  const [logoutPending, setLogoutPending] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user);
  const chats = useAppSelector((state: RootState) => state.chats.list);
  const location = useLocation();
  const navigate = useNavigate();

  const signoutFromChatix = async () => {
    setLogoutPending(true);
    signOut(auth).then(() => {
      setLogoutPending(false);
      navigate("/login");
    });
  };

  if (user.profile && user.data?.email) {
    return (
      <div className={`w-full lg:max-w-[325px] h-full min-h-svh bg-white border-e flex flex-col shadow-xl ${location.pathname !== "/" && "max-lg:hidden"}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              {/*Profile image*/}
              {user.profile.photoUrl ? (
                <SidebarProfileImage />
              ) : (
                <div className="size-[65px] border-2 rounded-full bg-base flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} size="xl" />
                </div>
              )}
              <Link
                to={"/edit-profile"}
                className="absolute bottom-0 right-0 bg-black/85 text-white rounded-full flex items-center justify-center text-center w-[22px] h-[22px]"
              >
                <FontAwesomeIcon icon={faPencil} size="2xs" />
              </Link>
            </div>
            <div className="ps-4">
              {/*user name*/}
              <div className="font-bold">{user.profile.name}</div>
              {/*email*/}
              <div className="text-xs mt-2 text-black/60">
                {user.data?.email}
              </div>
            </div>
          </div>
          <button className={button({ className: "lg:hidden" })}>
            Logout
          </button>
        </div>
        <div>
          {chats.map((c, index) => {
            return <ChatListItem chat={c} key={index} />;
          })}
        </div>
        <div className="p-6 mt-auto">
          <Link
            to={"/create-chat"}
            className={button({ intent: "dark", className: "w-full hidden lg:flex" })}
          >
            Create chat
          </Link>
          <Link
            to={"/create-chat"}
            className={button({ intent: "dark", size: "large", className: "w-full flex lg:hidden" })}
          >
            Create chat
          </Link>
          <button
            disabled={logoutPending}
            onClick={signoutFromChatix}
            className={button({ className: "w-full max-lg:hidden mt-2" })}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
};

export default Sidebar;
