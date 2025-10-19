import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import StickerPack from "../types/StickerPack";
import { StickerPackModalContext } from "../providers/StickerPackModalProvider";
import { doc, getDoc, runTransaction } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import button from "../cva/button";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function StickerPackModalContent({ setIsActive }: { setIsActive: Dispatch<SetStateAction<boolean>> }) {

    const userProfile = useAppSelector((state: RootState) => state.user.profile);
    const { packId } = useContext(StickerPackModalContext);
    const [pending, setPending] = useState<boolean>(true);
    const [addOrRemovePending, setAddOrRemovePending] = useState<boolean>(false);
    const [stickerPack, setStickerPack] = useState<StickerPack | null>(null);

    const userHasCurrentStickerPack = userProfile?.stickerPacksIds?.includes(packId);

    const getStickerPack = async () => {
        setPending(true);
        const docRef = doc(db, "sticker_pack", packId);
        const docSnap = await getDoc(docRef);
        setStickerPack(docSnap.data() as StickerPack);
        setPending(false);
    }

    const addAndRemoveStickerPack = async () => {
        if (userProfile) {
            setAddOrRemovePending(true);

            await runTransaction(db, async (transaction) => {
                transaction.update(doc(db, "profile", userProfile.id), {
                    stickerPacksIds: userHasCurrentStickerPack ? userProfile.stickerPacksIds.filter((id) => id != packId)
                        : [...userProfile.stickerPacksIds, packId]
                })
            });

            setAddOrRemovePending(false);
            setIsActive(false);
        }
    }

    useEffect(() => {
        getStickerPack();
    }, [packId]);

    return (
        <div>
            {
                pending && (
                    <div className="flex justify-center text-center">
                        <div className="size-8 rounded-full border-natural/50 border-2 border-r-transparent animate-spin">

                        </div>
                    </div>
                )
            }
            {
                stickerPack && !pending && (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold font-Vazir">
                                {stickerPack.name}
                            </div>
                            <button className="size-8 bg-zinc-100 border rounded-full flex items-center justify-center"
                                onClick={() => setIsActive(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <div className="grid grid-cols-5 gap-2 mt-5 max-h-60 overflow-auto">
                            {
                                stickerPack.urls.map((item, index) => {
                                    return (
                                        <img key={index} crossOrigin="anonymous" className="aspect-square object-cover rounded-lg" src={item} />
                                    )
                                })
                            }
                        </div>

                        <div className="mt-5">
                            {
                                userHasCurrentStickerPack ? (
                                    <button disabled={addOrRemovePending}
                                        onClick={addAndRemoveStickerPack}
                                        className={button({ className: "w-full", intent: "danger" })}>
                                        <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                                        Remove sticker pack
                                    </button>
                                ) : (
                                    <button disabled={addOrRemovePending}
                                        onClick={addAndRemoveStickerPack}
                                        className={button({ className: "w-full", intent: "primary" })}>
                                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                                        Add {stickerPack.urls.length} stickers
                                    </button>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}