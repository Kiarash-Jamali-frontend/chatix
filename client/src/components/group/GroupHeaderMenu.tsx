import { motion } from "framer-motion";
import { GroupHeaderPropTypes, ModalContentType } from "./GroupHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrashCan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import deleteGroup from "../../helpers/group/deleteGroup";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import removeAndAddUserGroup from "../../helpers/group/removeAndAddUserGroup";

export default function GroupHeaderMenu({ groupData, membersProfiles, setIsActive, setModalContentType }: GroupHeaderPropTypes) {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const navigate = useNavigate();

    const handleDeleteGroup = async () => {
        const { successful } = await deleteGroup({ groupData, membersProfiles });

        if (successful) {
            navigate("/", {
                replace: true,
                viewTransition: true
            });
        }
    }

    const leaveGroupHandler = () => {
        const id = membersProfiles.find((mp) => mp.email == userEmail)?.groupMemberDocId;
        if (id) {
            removeAndAddUserGroup(id, "remove");
            navigate("/");
        }
    }

    const openAddMemberModalHandler = () => {
        setModalContentType(ModalContentType.ADD_MEMBER_FORM);
        setIsActive(true);
    }

    const openEditModalHandler = () => {
        setModalContentType(ModalContentType.EDIT_GROUP);
        setIsActive(true);
    }

    return (
        <motion.div
            dir="ltr"
            variants={{
                open: {
                    opacity: 1,
                    transform: "translate(0,0) scale(1)"
                },
                hide: {
                    opacity: 0,
                    transform: "translate(1rem, -1rem) scale(0.9)"
                }
            }} transition={{ duration: 0.2 }} initial="hide" animate="open" exit="hide"
            className="bg-secondary border p-1.5 absolute min-w-52 rounded-2xl mt-2 shadow-lg space-y-1.5">
            {
                groupData.creator == userEmail ? (
                    <>
                        <button
                            onClick={openAddMemberModalHandler}
                            className={`bg-base border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                            <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                            Add member
                        </button>
                        <button
                            onClick={openEditModalHandler}
                            className={`bg-base border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                            Edit
                        </button>
                        <button
                            onClick={handleDeleteGroup}
                            className={`bg-red-500/10 text-red-500 border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                            <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                            Delete group
                        </button>
                    </>
                ) : (
                    <button
                        onClick={leaveGroupHandler}
                        className={`bg-red-500/10 text-red-500 border cursor-pointer p-2 rounded-xl w-full text-start text-sm font-medium flex items-center`}>
                        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                        Leave group
                    </button>
                )
            }
        </motion.div>
    )
}