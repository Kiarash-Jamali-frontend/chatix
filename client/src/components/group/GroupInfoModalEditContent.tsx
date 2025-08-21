import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import input from "../../cva/input";
import Group from "../../types/Group";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import button from "../../cva/button";
import { faArrowLeft, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { doc, runTransaction } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../../helpers/files/getFileExt";
import { ModalContentType } from "./GroupHeader";

export default function GroupInfoModalEditContent({ groupData, setModalContentType }:
    { groupData: Group, setModalContentType: Dispatch<SetStateAction<ModalContentType>> }) {

    const [pending, setPending] = useState<boolean>(false);
    const [groupName, setGroupName] = useState<string>(groupData.groupName);
    const [groupProfile, setGroupProfile] = useState<File | null>(null);
    const groupProfileInput = useRef<HTMLInputElement>(null);

    const removeGroupProfileHandler = () => {
        if (groupProfileInput.current) {
            const dt = new DataTransfer();
            groupProfileInput.current.files = dt.files;
            setGroupProfile(null);
        }
    }

    const changeGroupDataHandler = async () => {
        setPending(true);
        const docRef = doc(db, "group", groupData.id);

        let newGroupPhotoUrl: string;

        if (groupProfile) {
            const profileRef = ref(storage, `group_profiles/${groupData.id}.${getFileExt(groupProfile.name)}`);
            await uploadBytes(profileRef, groupProfile);
            newGroupPhotoUrl = await getDownloadURL(profileRef);
        }

        await runTransaction(db, async (transaction) => {
            transaction.update(docRef, {
                groupName,
                groupPhotoUrl: newGroupPhotoUrl || groupData.groupPhotoUrl
            });
        });

        removeGroupProfileHandler();
        setPending(false);
    }

    return (
        <div className="pt-4 mt-4 border-t">
            <div>
                <label htmlFor="groupName">Name:</label>
                <input id="groupName" type="text" value={groupName}
                    onChange={({ target }) => setGroupName(target.value)}
                    className={input({ className: "mt-0.5" })} />
            </div>
            <div className="mt-4">
                <label htmlFor="groupProfile">Group profile:</label>
                <input id="groupProfile"
                    accept="image/*"
                    onChange={(e) => setGroupProfile(e.target.files![0])}
                    type="file"
                    hidden
                    ref={groupProfileInput} />
                {
                    !groupProfile ? (
                        <label htmlFor="groupProfile" className={button({ className: "mt-0.5" })}>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 mt-4">
                <button className={button({ intent: "default" })}
                    onClick={() => setModalContentType(ModalContentType.DEFAULT)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Back
                </button>
                <button className={button({ intent: "primary" })} disabled={pending}
                    onClick={changeGroupDataHandler}>
                    Submit Changes
                </button>
            </div>
        </div>
    )
}