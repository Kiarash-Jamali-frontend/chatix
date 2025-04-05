import { Link } from "react-router-dom";
import { MemberProfile } from "../../pages/Group";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import GradiantProfile from "../GradiantProfile";
import UserLastActivity from "../UserLastActivity";
import { SidebarGroupData } from "../../redux/slices/groups";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import removeAndAddUserGroup from "../../helpers/group/removeAndAddUserGroup";

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
                className={`flex flex-grow group items-center justify-between ${userEmail == profile.email && "pointer-events-none"}`}
                to={userEmail == profile.email ? "#" : chatIsCreated ? `/chat/${profile.email}` : `/create-chat?email=${profile.email}`}>
                <div className="flex items-center">
                    <div className="size-12">
                        {
                            profile.photoUrl ? (
                                <img src={profile.photoUrl} alt="profile"
                                    className="size-12 object-cover object-center rounded-full" />
                            ) : (
                                <GradiantProfile name={profile.name} size="md" />
                            )
                        }
                    </div>
                    <div className="ps-3">
                        <div className="text-sm flex items-center font-medium">{profile.name} {groupData.creator == profile.email && (
                            <span className="text-xs text-gray-400 ms-1">| Owner</span>
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
                        className="border rounded-lg disabled:opacity-50 size-9 hover:bg-red-50 active:bg-red-100 transition-colors border-red-500 text-red-500">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                )
            }
        </div>
    )
}