import { useRef, useState } from "react";
import input from "../cva/input";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import Profile from "../types/Profile";
import button from "../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { changeUserProfile } from "../redux/slices/user";
import { Link } from "react-router-dom";

export default function EditProfile() {
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state: RootState) => state.user.data!.email);
    const profile = useAppSelector((state: RootState) => state.user.profile);
    const [profileData, setProfileData] = useState<Profile>(profile!);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const profileImageInput = useRef<HTMLInputElement>(null);

    const removeProfileImageHandler = () => {
        if (profileImageInput.current) {
            const dt = new DataTransfer();
            profileImageInput.current.files = dt.files;
            setProfileImage(null);
        }
    }

    const changeUserProfileHandler = () => {
        setPending(true);
        dispatch(changeUserProfile({
            userEmail: userEmail,
            biography: profileData.biography,
            name: profileData.name,
            profileImage,
            defaultProfileUrl: profile!.photoUrl
        }))
            .then(() => {
                setPending(false);
                removeProfileImageHandler();
            });
    }

    return (
        <div className="p-8 lg:rounded-xl bg-white shadow-sm border w-full max-w-2xl m-auto h-fit max-lg:h-full max-lg:min-h-svh flex flex-col">
            <div className="flex items-center pb-[11px] border-b">
                <Link to={"/"} className="lg:hidden me-3">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </Link>
                <h2 className="font-bold text-2xl">
                    Edit profile
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-4">
                <div>
                    <label htmlFor="name" className="text-sm inline-block mb-1">Name</label>
                    <input id="name" value={profileData.name}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
                        type="text"
                        className={input()} />
                </div>
                <div>
                    <label htmlFor="profileImage" className="text-sm inline-block mb-1">New profile image</label>
                    <input id="profileImage"
                        accept="image/*"
                        onChange={(e) => setProfileImage(e.target.files![0])}
                        type="file"
                        hidden
                        ref={profileImageInput} />
                    {
                        !profileImage ? (
                            <label htmlFor="profileImage" className={button()}>
                                <FontAwesomeIcon icon={faUpload} className="me-2" />
                                Choose file</label>
                        ) : (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={URL.createObjectURL(profileImage)} className="object-cover size-8 me-2.5 rounded-md" />
                                    <div>
                                        <div className="text-sm mb-0.5">
                                            {profileImage.name}
                                        </div>
                                        <div className="text-xs text-black/60">
                                            {(profileImage.size / 10 ** 6).toFixed(2)} MB
                                        </div>
                                    </div>
                                </div>
                                <button className={button({ intent: "danger", className: "size-8" })} onClick={removeProfileImageHandler}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="biography" className="text-sm inline-block mb-1">Biography
                    <span className="text-xs font-light text-black/75 ms-1.5">{profileData.biography.length}/180</span></label>
                <textarea
                    value={profileData.biography}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, biography: e.target.value }))}
                    className={input()}
                    maxLength={180}
                    rows={3} id="biography"></textarea>
            </div>

            <div className="mt-auto">
                <button disabled={pending} className={button({ intent: "dark", size: "large", className: "w-full mt-4" })} onClick={changeUserProfileHandler}>
                    Submit changes
                </button>
            </div>
        </div>
    )
}