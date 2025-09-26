import { useRegisterSW } from "virtual:pwa-register/react"

export default function AppUpdateMessage({ isInSidebar = false }: { isInSidebar?: boolean }) {

    const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW({
        onNeedRefresh: () => {
            console.log("Chatix has a new update!");
        }
    });

    if (needRefresh) {
        return (
            <div className={`${!isInSidebar ? "lg:fixed lg:top-0 lg:left-0 lg:right-0" : ""} w-full py-3 px-4 bg-purple-100 border-b-purple-300 border-b-2 text-sm font-semibold text-black flex items-center justify-between`}>
                <span>
                    Chatix has a new update!
                </span>
                <button className="text-purple-500 underline underline-offset-6 cursor-pointer" onClick={() => updateServiceWorker(true)}>
                    Update Now!
                </button>
            </div>
        )
    }

    return null;
}