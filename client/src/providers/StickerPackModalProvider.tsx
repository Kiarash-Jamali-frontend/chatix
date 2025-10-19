import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type StickerPackModalContextType = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    packId: string;
    setPackId: Dispatch<SetStateAction<string>>
}

export const StickerPackModalContext = createContext<StickerPackModalContextType>({
    isActive: false,
    setIsActive: () => { },
    packId: "",
    setPackId: () => { }
});

export default function StickerPackModalProvider({ children }: { children: ReactNode }) {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [packId, setPackId] = useState<string>("");

    return (
        <StickerPackModalContext.Provider value={{ isActive, setIsActive, packId, setPackId }}>
            {children}
        </StickerPackModalContext.Provider>
    )
}