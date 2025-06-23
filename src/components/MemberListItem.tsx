import Profile from "../types/Profile";
import ProfileImageSizes from "../types/ProfileImageSizes";
import GradiantProfile from "./GradiantProfile";

type PropTypes = {
    member: (Profile & {
        email: string;
        notSeenedMessages: number;
    });
    isSelected: boolean;
    callbackFn: (e: string) => void;
}

export default function MemberListItem({ member, isSelected, callbackFn }: PropTypes) {
    return (
        <div
            onClick={() => callbackFn(member.email)}
            className="h-fit border py-2.5 px-3 cursor-pointer bg-secondary hover:bg-zinc-50 transition-colors rounded-xl flex items-center justify-between" key={member.email}>
            <div className="flex items-center">
                {member.photoUrl ? (
                    <img
                        src={member.photoUrl}
                        crossOrigin="anonymous"
                        alt={"profile"}
                        className="size-12 min-w-12 object-cover rounded-full"
                    />
                ) : (
                    <GradiantProfile name={member.name} size={ProfileImageSizes.SMALL} />
                )}
                <div className="flex flex-col ms-2.5">
                    <span className="text-sm font-medium font-Vazir">{member.name}</span>
                    <span className="text-xs mt-1 text-natural/50">{member.email}</span>
                </div>
            </div>
            <div className={`size-6 rounded-full border relative flex items-center justify-center transition-all ${isSelected ? "bg-linear-to-br from-primary-400 to-primary-600 before:scale-100" : "bg-secondary before:scale-0"} before:bg-white before:size-2.5 before:transition-all before:absolute before:rounded-full`}>

            </div>
        </div>
    )
}