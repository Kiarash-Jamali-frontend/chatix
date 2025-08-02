import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { changeOpenedProfile } from "../../redux/slices/openedProfile";

export default function SidebarProfileImage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);

    return (
        <img
            src={user.profile!.photoUrl}
            alt={"profile"}
            crossOrigin="anonymous"
            className="object-cover object-center cursor-pointer size-16 block rounded-full border"
            onClick={() => {
                dispatch(changeOpenedProfile({
                    data: {
                        isCurrentUserProfile: true,
                        profile: user.profile!.photoUrl
                    }
                }))
            }}
        />
    )
}