import React from "react";
import { auth } from "../../helpers/firebase";
import button from "../../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/store";
import ChatListItem from "../ChatListItem";
import { useAppSelector } from "../../redux/hooks";
import SidebarProfileImage from "./SidebarProfileImage";

const Sidebar: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const chats = useAppSelector((state: RootState) => state.chats.list);
  const navigate = useNavigate();

  const signoutFromChatix = async () => {
    await auth.signOut();
    navigate("/login");
  };

  if (user.profile && user.data?.email) {
    return (
      <div className="w-full max-w-[325px] h-full min-h-screen bg-white border-e flex flex-col shadow-xl">
        <div className="flex items-center p-6">
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
        <div>
          {chats.map((c, index) => {
            return <ChatListItem chat={c} key={index} />;
          })}
        </div>
        <div className="p-6 mt-auto">
          <Link
            to={"/create-chat"}
            className={button({ intent: "dark", className: "mb-2 w-full" })}
          >
            Create chat
          </Link>
          <button
            onClick={signoutFromChatix}
            className={button({ className: "w-full" })}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
};

export default Sidebar;