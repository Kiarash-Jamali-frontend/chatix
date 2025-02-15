import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import toastConf from "../../utils/toastConfig";
import downloadFile from "../helpers/downloadFile";
import { removeOpenedProfile, resetHideCallback } from "../redux/slices/openedProfile";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { deleteProfileImage } from "../redux/slices/user";

export default function ProfileModal() {

    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const openedProfileImage = useAppSelector((state: RootState) => state.openedProfile.data);
    const hideCallback = useAppSelector((state: RootState) => state.openedProfile.hideCallback);
    const [pending, setPending] = useState<boolean>(false);
    const [deleteProfileImagePending, setDeleteProfileImagePending] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const downloadImageFileHandler = () => {
        if (openedProfileImage.profile) {
            setPending(true);
            downloadFile(openedProfileImage.profile, (errorMsg) => {
                if (errorMsg) {
                    toast.error(errorMsg, toastConf);
                }
                setPending(false);
            });
        }
    }

    const deleteProfileImageHandler = () => {
        if (userEmail && openedProfileImage.profile) {
            setDeleteProfileImagePending(true);
            dispatch(
                deleteProfileImage({
                    profileUrl: openedProfileImage.profile,
                    userEmail: userEmail
                }))
                .then(() => {
                    dispatch(removeOpenedProfile());
                }).finally(() => {
                    setDeleteProfileImagePending(false);
                }).catch((e) => {
                    toast.error(e.message, toastConf);
                })
        }
    }

    return (
        <>
            <ToastContainer />
            <AnimatePresence>
                {
                    openedProfileImage.profile && (
                        <motion.div className="fixed inset-[-25%] bg-black/50 backdrop-blur-sm z-[999] grid place-items-center"
                            variants={{
                                hide: {
                                    opacity: 0,
                                    transform: "translateY(25px)"
                                },
                                open: {
                                    opacity: 1,
                                    transform: "translateY(0px)"
                                }
                            }} initial="hide" animate="open" exit="hide">
                            <div className="fixed inset-0" onClick={() => {
                                dispatch(removeOpenedProfile());
                                hideCallback();
                                resetHideCallback();
                            }}>

                            </div>
                            <div className="relative px-4">
                                <div className="relative w-full h-full max-w-96 max-h-96">
                                    <img src={openedProfileImage.profile} className="rounded-xl object-cover size-full" />
                                    {
                                        openedProfileImage.isCurrentUserProfile && (
                                            <div className={`bottom-3 right-3 absolute flex items-center z-50 transition-all`}>
                                                <button
                                                    disabled={deleteProfileImagePending}
                                                    onClick={deleteProfileImageHandler}
                                                    className={`h-8 px-3 me-2 text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                                    {
                                                        deleteProfileImagePending ? (
                                                            <div
                                                                className="size-4 border border-e-transparent border-black rounded-full animate-spin">
                                                            </div>
                                                        ) : (
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        )
                                                    }
                                                    <span className="font-medium text-xs ms-1">
                                                        {
                                                            deleteProfileImagePending ? "Deleting ..." : "Delete"
                                                        }
                                                    </span>
                                                </button>
                                                <button
                                                    disabled={pending}
                                                    onClick={downloadImageFileHandler}
                                                    className={`h-8 px-3 text-sm flex items-center justify-center bg-white hover:bg-gray-50 text-black rounded-full`}>
                                                    {
                                                        pending ? (
                                                            <div
                                                                className="size-4 border border-e-transparent border-black rounded-full animate-spin">
                                                            </div>
                                                        ) : (
                                                            <FontAwesomeIcon icon={faDownload} />
                                                        )
                                                    }
                                                    <span className="font-medium text-xs ms-1">
                                                        {
                                                            pending ? "Downloading ..." : "Download"
                                                        }
                                                    </span>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}