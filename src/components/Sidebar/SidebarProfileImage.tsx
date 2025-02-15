import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { changeOpenedProfile } from "../../redux/slices/openedProfile";

export default function SidebarProfileImage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);

    return (
        <>
            <div className="relative rounded-full overflow-hidden group border">
                <img
                    src={user.profile!.photoUrl}
                    alt={"profile"}
                    className="size-16 object-cover object-center cursor-pointer"
                    onClick={() => {
                        dispatch(changeOpenedProfile({
                            data: {
                                isCurrentUserProfile: true,
                                profile: user.profile!.photoUrl
                            }
                        }))
                    }}
                />
            </div>
        </>
    )
}