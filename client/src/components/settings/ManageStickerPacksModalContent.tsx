import { faArrowLeft, faChevronRight, faClose, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import StickerPack from "../../types/StickerPack";
import input from "../../cva/input";
import button from "../../cva/button";
import { doc, runTransaction } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../../helpers/files/getFileExt";
import { getUserProfile } from "../../redux/slices/user";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function ManageStickerPacksModalContent({ setIsActive }: { setIsActive: Dispatch<SetStateAction<boolean>> }) {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const [selectedPack, setSelectedPack] = useState<StickerPack | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [packName, setPackName] = useState<string>("");
    const [selectedPackItemsForDelete, setSelectedPackItemsForDelete] = useState<string[]>([]);
    const [packItems, setPackItems] = useState<File[]>([]);
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const userProfile = useAppSelector((state: RootState) => state.user.profile);

    const selectedPackItems = selectedPack?.urls.filter((item) => !selectedPackItemsForDelete.includes(item)) || [];
    const isInvalidData = (!packItems.length && !selectedPackItems.length && !selectedPackItemsForDelete.length)
        || !packName.trim()
        || (!packItems.length && !selectedPackItemsForDelete.length && packName == selectedPack?.name);

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

    const deleteNotUploadedStickerPackItem = (index: number) => {
        setPackItems((prev) => prev.filter((_, i) => i != index));
    }

    const deleteStickerPackItem = (item: string) => {
        setSelectedPackItemsForDelete((prev) => [...prev, item]);
    }

    const removeStickerPack = async () => {
        try {
            setError("");
            setPending(true);
            if (userEmail && selectedPack && userProfile) {
                await runTransaction(db, async (transaction) => {
                    transaction.update(doc(db, "profile", userEmail), {
                        urls: userProfile.stickerPacksIds?.filter((id) => id != selectedPack.id) || []
                    });
                });
                await dispatch(getUserProfile(userEmail));
                setSelectedPack(null);
            }
        } catch (e) {
            const { message } = e as Error;
            setError(message);
        } finally {
            setPending(false);
        }
    }

    const updateStickerPack = async () => {
        try {
            setError("");
            setPending(true);
            if (!isInvalidData && userEmail && selectedPack) {
                let urls: string[] = [];
                for (let i = 0; i < packItems.length; i++) {
                    const file = packItems[i];
                    const stickerRef = ref(storage, `sticker_packs/${selectedPack.id}/${uuid()}.${getFileExt(file.name)}`);
                    await uploadBytes(stickerRef, file);
                    const url = await getDownloadURL(stickerRef);
                    urls.push(url);
                }
                const newUrlsList = [...selectedPack.urls.filter((url) => !selectedPackItemsForDelete.includes(url)), ...urls];
                await runTransaction(db, async (transaction) => {
                    transaction.update(doc(db, "sticker_pack", selectedPack.id), {
                        urls: newUrlsList
                    });
                });
                await dispatch(getUserProfile(userEmail));
                setPackItems([]);
                setSelectedPack((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            urls: newUrlsList
                        }
                    }
                    return null;
                });
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
                <div className={`${selectedPack ? "font-Vazir" : ""} text-xl font-bold`}>
                    {selectedPack ? selectedPack.name : "Manage sticker packs"}
                </div>
                <button className="size-8 bg-zinc-100 border rounded-full flex items-center justify-center"
                    onClick={() => setIsActive(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>

            {
                selectedPack ? (
                    selectedPack.creator == userEmail ? (
                        <>
                            <div className="mt-4">
                                <label htmlFor="packNameInput" className="text-sm">Name:</label>
                                <input dir="auto" type="text" className={input({ className: "mt-1" })}
                                    value={packName} onChange={({ target }) => setPackName(target.value)} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="packItemsInput" className="text-sm">Items:</label>
                                <input ref={fileInputRef} type="file" multiple id="packItemsInput" accept="image/*" hidden
                                    onChange={handleSelectFiles} />
                            </div>
                            <div className="grid grid-cols-5 gap-2 mt-1 max-h-60 overflow-auto">
                                {
                                    packItems.length < 120 && (
                                        <label htmlFor="packItemsInput"
                                            className="aspect-square h-full w-full bg-base rounded-xl border grid place-items-center">
                                            <FontAwesomeIcon icon={faPlus} className="text-2xl text-natural/60" />
                                        </label>
                                    )
                                }
                                {
                                    packItems.map((item, index) => {
                                        return (
                                            <div key={index} className="relative">
                                                <button
                                                    onClick={() => deleteNotUploadedStickerPackItem(index)}
                                                    className="absolute top-2 right-2 bg-base size-6 shadow-sm border grid place-items-center rounded-full">
                                                    <FontAwesomeIcon icon={faTrashAlt} size="xs" />
                                                </button>
                                                <img className="aspect-square object-cover rounded-lg" src={URL.createObjectURL(item)} />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    selectedPackItems.map((item, index) => {
                                        return (
                                            <div key={index} className="relative">
                                                <button
                                                    onClick={() => deleteStickerPackItem(item)}
                                                    className="absolute top-2 right-2 bg-base size-6 shadow-sm border grid place-items-center rounded-full">
                                                    <FontAwesomeIcon icon={faTrashAlt} size="xs" />
                                                </button>
                                                <img crossOrigin="anonymous" className="aspect-square object-cover rounded-xl" src={item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {
                                !!error && (
                                    <div className="mt-4 rounded-lg text-sm p-2 bg-red-500/5 border border-red-500/25 text-red-500 flex">
                                        {error}
                                    </div>
                                )
                            }
                            <button disabled={pending} className={button({ className: "mt-4 w-full", intent: "danger" })}
                                onClick={removeStickerPack}>
                                <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                                Remove sticker pack
                            </button>
                            <div className="grid grid-cols-2 gap-x-2.5 mt-2.5">

                                <button disabled={pending}
                                    onClick={() => {
                                        setSelectedPack(null);
                                        setPackItems([]);
                                        setSelectedPackItemsForDelete([]);
                                        setError("");
                                    }}
                                    className={button()}>
                                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                    Back
                                </button>

                                <button disabled={isInvalidData || pending}
                                    onClick={updateStickerPack}
                                    className={button({ intent: "primary" })}>
                                    Submit changes
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div className="grid grid-cols-5 gap-2 mt-4 max-h-60 overflow-auto">
                                {
                                    selectedPack.urls.map((item, index) => {
                                        return (
                                            <img key={index} crossOrigin="anonymous" className="aspect-square object-cover rounded-lg" src={item} />
                                        )
                                    })
                                }
                            </div>

                            <button disabled={pending}
                                onClick={removeStickerPack}
                                className={button({ className: "w-full mt-5", intent: "danger" })}>
                                <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                                Remove sticker pack
                            </button>
                        </div>
                    )
                ) : (
                    <div className="mt-5 space-y-2">
                        {
                            userProfile?.stickerPacks?.map((p) => {
                                return (
                                    <div key={p.id} className="font-Vazir flex items-center justify-between p-2 rounded-xl border"
                                        onClick={() => {
                                            setSelectedPack(p);
                                            setPackName(p.name);
                                        }}>
                                        {p.name}
                                        <div className="size-7 bg-zinc-100 border rounded-full flex justify-center items-center">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                )
            }
        </div>
    )
}