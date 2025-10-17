import { faClose, faPlus, faTrashAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import input from "../cva/input";
import button from "../cva/button";
import { addDoc, collection, doc, runTransaction } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUserProfile } from "../redux/slices/user";
import { RootState } from "../redux/store";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../helpers/files/getFileExt";
import { v4 as uuid } from "uuid";

export default function MakeStickerPackModalContent({ setIsActive }: { setIsActive: Dispatch<SetStateAction<boolean>> }) {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const userProfile = useAppSelector((state: RootState) => state.user.profile);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [packName, setPackName] = useState<string>("");
    const [packItems, setPackItems] = useState<File[]>([]);

    const isInvalidData = !(packItems.length && packName.trim());

    const handleSelectFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let files: File[] = [];
            for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files.item(i) as File;
                files.push(file);
            }
            setPackItems((prev) => [...prev, ...files]);
        }
        const files = fileInputRef.current?.files;
        if (files) {
            const dt = new DataTransfer();
            fileInputRef.current.files = dt.files;
        }
    }

    const deleteStickerPackItem = (index: number) => {
        setPackItems((prev) => prev.filter((_, i) => i != index));
    }

    const uploadStickerPack = async () => {
        try {
            setError("");
            setPending(true);
            if (!isInvalidData && userEmail) {
                const docRef = await addDoc(collection(db, "sticker_pack"), {
                    name: packName,
                    creator: userEmail
                });
                let urls: string[] = [];
                for (let i = 0; i < packItems.length; i++) {
                    const file = packItems[i];
                    const profileRef = ref(storage, `sticker_packs/${docRef.id}/${uuid()}.${getFileExt(file.name)}`);
                    await uploadBytes(profileRef, file);
                    const url = await getDownloadURL(profileRef);
                    urls.push(url);
                }
                await runTransaction(db, async (transaction) => {
                    transaction.update(doc(db, "sticker_pack", docRef.id), {
                        urls
                    });
                    transaction.update(doc(db, "profile", userEmail), {
                        stickerPacksIds: userProfile?.stickerPacksIds ? [...userProfile.stickerPacksIds, docRef.id] : [docRef.id]
                    });
                });
                await dispatch(getUserProfile(userEmail));
                setIsActive(false);
            }
        } catch (e) {
            const { message } = e as Error;
            setError(message);
        } finally {
            setPending(false);
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">
                    New sticker pack
                </div>
                <button className="size-8 bg-zinc-100 border rounded-full flex items-center justify-center"
                    onClick={() => setIsActive(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
            <div className="mt-4">
                <label htmlFor="packNameInput" className="text-sm">Name:</label>
                <input dir="auto" type="text" className={input({ className: "mt-1" })}
                    value={packName} onChange={({ target }) => setPackName(target.value)} />
            </div>
            <div className="mt-4">
                <label htmlFor="packItemsInput" className="text-sm">Items:</label>
                <input ref={fileInputRef} type="file" multiple id="packItemsInput" accept="image/*" hidden
                    onChange={handleSelectFiles} />
                {
                    !packItems.length ? (
                        <label htmlFor="packItemsInput" className={button()}>
                            <FontAwesomeIcon icon={faUpload} className="me-2" />
                            Choose files</label>
                    ) : (
                        <div className="grid grid-cols-5 gap-2 mt-1 max-h-60 overflow-auto">
                            {
                                packItems.map((item, index) => {
                                    return (
                                        <div key={index} className="relative">
                                            <button
                                                onClick={() => deleteStickerPackItem(index)}
                                                className="absolute top-2 right-2 bg-base size-6 shadow-sm border grid place-items-center rounded-full">
                                                <FontAwesomeIcon icon={faTrashAlt} size="xs" />
                                            </button>
                                            <img className="aspect-square object-cover rounded-xl" src={URL.createObjectURL(item)} />
                                        </div>
                                    )
                                })
                            }
                            {
                                packItems.length < 120 && (
                                    <label htmlFor="packItemsInput"
                                        className="aspect-square h-full w-full bg-base rounded-xl border grid place-items-center">
                                        <FontAwesomeIcon icon={faPlus} className="text-2xl text-natural/60" />
                                    </label>
                                )
                            }
                        </div>
                    )
                }
            </div>
            {
                !!error && (
                    <div className="mt-4 rounded-lg text-sm p-2 bg-red-500/5 border border-red-500/25 text-red-500 flex">
                        {error}
                    </div>
                )
            }
            <button disabled={isInvalidData || pending}
                onClick={uploadStickerPack}
                className={button({ intent: "primary", className: "mt-4 w-full" })}>
                Make your sticker pack
            </button>
        </div>
    )
}