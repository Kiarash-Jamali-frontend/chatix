import Profile from "../../types/Profile";
import ProfileImageSizes from "../../types/ProfileImageSizes";
import GradiantProfile from "../GradiantProfile";

type PropTypes = { photoUrl: Profile['photoUrl'], name: Profile['name'], size: ProfileImageSizes };

export default function ProfileImage({ photoUrl, name, size }: PropTypes) {
    return (
        photoUrl ? (
            <img
                crossOrigin="anonymous"
                src={photoUrl}
                alt={"profile"}
                className={`${size} object-cover rounded-full border`}
            />
        ) : (
            <GradiantProfile name={name} size={size} />
        )
    )
}