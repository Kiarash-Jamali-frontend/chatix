import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { deleteProfileImage } from "../../redux/slices/user";
import { useState } from "react";

export default function SidebarProfileImage() {
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);

    const deleteProfileImageHandler = () => {
        setPending(true);
        dispatch(deleteProfileImage({ profileUrl: user.profile!.photoUrl, userEmail: user.data!.email }))
            .then(() => setPending(false));
    }

    return (
        <>
            <div className="relative rounded-full overflow-hidden group border">
                <img
                    src={user.profile?.photoUrl}
                    alt={"profile"}
                    className="size-[65px] object-cover"
                />
                <div
                    onClick={deleteProfileImageHandler}
                    className={`${!pending && "opacity-0"} absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
                    {
                        !pending ? (
                            <FontAwesomeIcon icon={faTrashCan} color="#fff" size="xl" />
                        ) : (
                            <div className="size-5 border-2 border-e-transparent animate-spin border-white rounded-full">

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}