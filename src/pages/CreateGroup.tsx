import { faArrowLeft, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import input from "../cva/input";
import { FormEvent, useCallback, useRef, useState } from "react";
import button from "../cva/button";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import MemberListItem from "../components/MemberListItem";
import { toast, ToastContainer } from "react-toastify";
import { addDoc, collection, runTransaction, Timestamp } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../helpers/files/getFileExt";
import toastConf from "../../utils/toastConfig";
import { addGroup } from "../redux/slices/groups";

export default function CreateGroup() {

    const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const chats = useAppSelector((state: RootState) => state.chats.list);
    const [selectedMembersEmails, setSelctedMembersEmails] = useState<string[]>([]);
    const [memberName, setMemberName] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [groupName, setGroupName] = useState<string>("");
    const [groupProfile, setGroupProfile] = useState<File | null>(null);

    const groupProfileInput = useRef<HTMLInputElement>(null);

    const successfulCreateGroupCallback = useCallback((data: { id: string, groupPhotoUrl: string }) => {
        toast.success(`${groupName} group created successful!`, toastConf);
        dispatch(addGroup({ ...data, groupName, creator: userEmail!, createdAt: Timestamp.now() }));
        removeGroupProfileHandler();
        setGroupName("");
        setMemberName("");
        setSelctedMembersEmails([]);
    }, [groupName, userEmail])

    const createGroupHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        if (!selectedMembersEmails.length) {
            toast.warn('Select at least one member to form a group.', toastConf);
        } else {
            if (userEmail) {
                // create group in db without profile
                const docRef = await addDoc(collection(db, "group"), {
                    creator: userEmail,
                    groupName: groupName,
                    createdAt: Timestamp.now(),
                    groupPhotoUrl: ""
                });
                let members: string[] = [...selectedMembersEmails, userEmail];
                members.forEach((e) => {
                    addDoc(collection(db, "group_member"), {
                        groupId: docRef.id,
                        memberEmail: e,
                        notSeenedMessagesCount: 0,
                        removedFromGroup: false,
                    })
                });
                if (groupProfile) {
                    const profileRef = ref(storage, `group_profiles/${userEmail}.${getFileExt(groupProfile.name)}`);
                    await uploadBytes(profileRef, groupProfile);
                    const profileUrl = await getDownloadURL(profileRef);
                    runTransaction(db, async (transaction) => {
                        transaction.update(docRef, {
                            groupPhotoUrl: profileUrl
                        });
                    });
                    successfulCreateGroupCallback({ groupPhotoUrl: profileUrl, id: docRef.id })
                } else {
                    successfulCreateGroupCallback({ groupPhotoUrl: "", id: docRef.id })
                }
            }
        }
        setPending(false);
    }

    const memberListItemClickHandler = (email: string) => {
        if (selectedMembersEmails.includes(email)) {
            setSelctedMembersEmails((prev) => prev.filter((e) => e != email));
        } else {
            setSelctedMembersEmails((prev) => [...prev, email]);
        }
    }

    const removeGroupProfileHandler = () => {
        if (groupProfileInput.current) {
            const dt = new DataTransfer();
            groupProfileInput.current.files = dt.files;
            setGroupProfile(null);
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="bg-white lg:rounded-xl shadow-sm lg:border px-8 pt-8 h-fit m-auto w-full lg:max-w-lg max-lg:h-svh flex flex-col">
                <div className="flex items-center">
                    <Link to={"/"} className="lg:hidden me-3">
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </Link>
                    <h2 className="font-bold text-2xl text-neutral-800">
                        Create group
                    </h2>
                </div>
                <form onSubmit={createGroupHandler} className="pt-5 pb-8 flex-grow flex flex-col h-full">
                    <div>
                        <label htmlFor="groupName">Name:</label>
                        <input type="groupName" id="groupName" required className={input()} value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="groupProfile">Group Profile:</label>
                        <input id="groupProfile"
                            accept="image/*"
                            onChange={(e) => setGroupProfile(e.target.files![0])}
                            type="file"
                            hidden
                            ref={groupProfileInput} />
                        {
                            !groupProfile ? (
                                <label htmlFor="groupProfile" className={button()}>
                                    <FontAwesomeIcon icon={faUpload} className="me-2" />
                                    Choose file</label>
                            ) : (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={URL.createObjectURL(groupProfile)} className="object-cover size-8 me-2.5 rounded-md" />
                                        <div>
                                            <div className="text-sm mb-0.5">
                                                {groupProfile.name}
                                            </div>
                                            <div className="text-xs text-black/60">
                                                {(groupProfile.size / 10 ** 6).toFixed(2)} MB
                                            </div>
                                        </div>
                                    </div>
                                    <button className={button({ intent: "danger", className: "size-8" })} onClick={removeGroupProfileHandler}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <label htmlFor="members" className="mt-4 block">Members:</label>
                    <input
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                        type="text" placeholder="Enter member name ..." className={input()}
                    />
                    <div className="mt-1.5 mb-5 grid gap-y-1.5 overflow-auto h-full scrollbar lg:max-h-[200px]">
                        {
                            chats.map((c, i) => {
                                const isSelected = selectedMembersEmails.includes(c.email);
                                if (!memberName.trim() || c.name.toLowerCase().includes(memberName.trim().toLowerCase())) {
                                    return (
                                        <MemberListItem
                                            key={i}
                                            callbackFn={() => memberListItemClickHandler(c.email)}
                                            isSelected={isSelected}
                                            member={c} />
                                    )
                                }
                            })
                        }
                    </div>
                    <button type="submit" disabled={pending}
                        className={button({ intent: "primary", size: "large", className: "w-full mt-auto" })}
                    >Create group</button>
                </form>
            </div>
        </>
    )
}