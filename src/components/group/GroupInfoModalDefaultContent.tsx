import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import button from "../../cva/button";
import { MemberProfile } from "../../pages/Group";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getGroups, SidebarGroupData } from "../../redux/slices/groups";
import { RootState } from "../../redux/store";
import MemberListItem from "./MemberListItem"
import { faArrowLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { ModalContentType } from "./GroupInfoModalContent";
import { useNavigate } from "react-router-dom";
import removeAndAddUserGroup from "../../helpers/group/removeAndAddUserGroup";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

type PropTypes = {
    groupData: SidebarGroupData;
    membersProfiles: MemberProfile[];
    setModalContentType: Dispatch<SetStateAction<ModalContentType>>
}

export default function GroupInfoModalDefaultContent({ membersProfiles, groupData, setModalContentType }: PropTypes) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const leaveGroupHandler = () => {
        setPending(true);
        const id = membersProfiles.find((mp) => mp.email == userEmail)?.groupMemberDocId;
        if (id) {
            removeAndAddUserGroup(id, "remove");
            if (userEmail) dispatch(getGroups(userEmail));
            navigate("/");
        }
        setPending(false);
    }

    return (
        <>
            <div className="mt-4 grid grid-cols-1 gap-y-4 max-h-60 overflow-auto scrollbar border-t pt-4">
                {
                    membersProfiles.filter((p) => !p.removedFromGroup).map((p) => {
                        return (
                            <MemberListItem key={p.id} groupData={groupData} profile={p} />
                        )
                    })
                }
            </div>
            <div className={`mt-4`}>
                {
                    groupData.creator == userEmail ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
                            <button className={button({ intent: "primary" })}
                                onClick={() => setModalContentType(ModalContentType.ADD_MEMBER_FORM)}>
                                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                                Add member
                            </button>
                            <button className={button({ intent: "default" })}
                                onClick={() => setModalContentType(ModalContentType.EDIT_GROUP)}>
                                <FontAwesomeIcon icon={faEdit} className="me-2" />
                                Edit
                            </button>
                            {/* <button className={button({ intent: "danger" })}
                                onClick={() => setModalContentType(ModalContentType.DELETE_GROUP_QUESTION)}>
                                <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                                Delete group
                            </button> */}
                        </div>
                    ) : (
                        <button disabled={pending} className={button({ intent: "danger", className: "w-full" })} onClick={leaveGroupHandler}>
                            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                            Leave group
                        </button>
                    )
                }
            </div>
        </>
    )
}