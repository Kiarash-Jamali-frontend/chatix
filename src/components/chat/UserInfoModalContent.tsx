import { faClose, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../../types/Profile";
import UserLastActivity from "../UserLastActivity";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import button from "../../cva/button";
import toastConf from "../../../utils/toastConfig";
import { toast } from "react-toastify";
import shareData from "../../helpers/shareWebAPI/shareData";
import canBrowserShareData from "../../helpers/shareWebAPI/canBrowserShareData";
import useChangeIsBlockingUser from "../../hooks/useChangeIsBlockingUser";
import { RootState } from "../../redux/store";
import { Dispatch, SetStateAction } from "react";
import { changeOpenedProfile } from "../../redux/slices/openedProfile";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";

type PropTypes = {
    userProfile: Profile & { email: string },
    chatRoom: any,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

export default function UserInfoModalContent({ userProfile, chatRoom, setIsActive }: PropTypes) {

    const dispatch = useAppDispatch();
    const changeIsBlockingUser = useChangeIsBlockingUser(chatRoom);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);

    const shareProfileDataHandler = () => {
        const sharedData: ShareData = {
            title: userProfile.name,
            text: `This is my email, you can create new chat with me in chatix: ${userProfile.email}`
        }
        if (canBrowserShareData(sharedData)) {
            shareData(sharedData);
        } else {
            toast.error("Your browser does not support this feature", toastConf);
        }
    }

    const openProfileHandler = () => {
        if (userProfile.photoUrl) {
            setIsActive(false);
            dispatch(changeOpenedProfile({
                data: {
                    isCurrentUserProfile: false,
                    profile: userProfile.photoUrl
                },
                hideCallback() {
                    setIsActive(true);
                },
            }))
        }
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div
                        onClick={openProfileHandler}
                    >
                        <ProfileImage size={ProfileImageSizes.LARGE} name={userProfile.name} photoUrl={userProfile.photoUrl} />
                    </div>
                    <div className="ms-3 flex flex-col">
                        <div className="font-semibold mb-0.5 font-Vazir">{userProfile.name}</div>
                        <UserLastActivity profile={userProfile} />
                    </div>
                </div>
                <button className="size-8 bg-zinc-100 border rounded-full flex items-center justify-center" onClick={() => setIsActive(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
            {userProfile.biography && (
                <div className="bg-zinc-50 py-2.5 px-4 border text-sm rounded-xl mt-5">
                    <span className="font-medium">Biography: </span>
                    <p className="text-natural/75 font-Vazir mt-2" dir="auto">
                        {userProfile.biography}
                    </p>
                </div>
            )}
            <div className="bg-zinc-50 flex items-center py-2.5 px-4 border text-sm rounded-xl mt-2">
                <span className="font-medium me-1">Email: </span>
                <p className="text-natural/60">{userProfile.email}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                <button className={button({ intent: "primary" })} onClick={shareProfileDataHandler}>
                    <FontAwesomeIcon icon={faShareNodes} className="me-1.5" />
                    Share
                </button>

                {
                    (chatRoom.blockedFrom === userEmail || !chatRoom.isBlocked) && (
                        <button
                            className={button({ intent: chatRoom.isBlocked ? "default" : "danger" })}
                            onClick={changeIsBlockingUser}
                        >
                            {chatRoom.isBlocked ? "Unblock" : "Block"}
                            <span className="font-bold ms-1">{userProfile.name}</span>
                        </button>
                    )
                }

                {
                    (chatRoom.blockedFrom === userProfile.email && chatRoom.isBlocked) && (
                        <p className="text-sm text-center my-auto text-natural/75">{userProfile.name} has blocked you.</p>
                    )
                }
            </div>
        </>
    )
}