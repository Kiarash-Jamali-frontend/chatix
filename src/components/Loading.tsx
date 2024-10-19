export default function Loading() {
    return (
        <div className="fixed inset-0 w-full h-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="size-10 border-4 border-e-transparent animate-spin border-black rounded-full mb-4">

                </div>
                <span className="text-sm text-black/75">
                    Please wait ...
                </span>
            </div>
        </div>
    )
}