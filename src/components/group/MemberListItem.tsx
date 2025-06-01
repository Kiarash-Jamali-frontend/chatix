import { Link } from "react-router-dom";
import { MemberProfile } from "../../pages/Group";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import UserLastActivity from "../UserLastActivity";
import { SidebarGroupData } from "../../redux/slices/groups";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import removeAndAddUserGroup from "../../helpers/group/removeAndAddUserGroup";
import ProfileImage from "../common/ProfileImage";
import ProfileImageSizes from "../../types/ProfileImageSizes";

export default function MemberListItem({ profile, groupData }: { profile: MemberProfile, groupData: SidebarGroupData }) {
    const chatsList = useAppSelector((state: RootState) => state.chats.list);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const chatIsCreated = chatsList.find((c) => c.email === profile.email);
    const [pending, setPending] = useState<boolean>(false);

    const removeUserFromGroupHandler = async (id: string) => {
        setPending(true);
        removeAndAddUserGroup(id, "remove");
        setPending(false);
    }

    return (
        <div key={profile.id} className="flex items-center">
            <Link unstable_viewTransition
                className={`flex grow group items-center justify-between ${userEmail == profile.email && "pointer-events-none"}`}
                to={userEmail == profile.email ? "#" : chatIsCreated ? `/chat/${profile.email}` : `/create-chat?email=${profile.email}`}>
                <div className="flex items-center">
                    <div className="size-12">
                        <ProfileImage name={profile.name}
                            photoUrl={profile.photoUrl}
                            size={ProfileImageSizes.MEDIUM} />
                    </div>
                    <div className="ps-3">
                        <div className="text-sm flex items-center font-medium font-Vazir">{profile.name} {groupData.creator == profile.email && (
                            <span className="text-xs text-natural/60 ms-1">| Owner</span>
                        )}</div>
                        <UserLastActivity profile={profile} />
                    </div>
                </div>
            </Link>

            {
                profile.email != userEmail && profile.email != groupData.creator && (
                    <button
                        disabled={pending}
                        onClick={() => removeUserFromGroupHandler(profile.groupMemberDocId)}
                        className="border rounded-lg disabled:opacity-50 size-8 cursor-pointer hover:bg-red-500/5 active:bg-red-500/10 transition-colors border-red-500 text-red-500">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                )
            }
        </div>
    )
}