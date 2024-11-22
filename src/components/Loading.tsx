export default function Loading() {
    return (
        <div className="fixed inset-0 w-full h-full bg-base before:absolute before:inset-0 before:bg-[url('/background.svg')] before:opacity-20 before:bg-base before:bg-contain before:bg-repeat before:z-0 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-xl p-6 z-10 relative border">
                <div className="size-10 border-[5px] border-e-transparent animate-spin border-blue-500 rounded-full mb-4">

                </div>
                <span className="text-sm text-black/75 font-medium">
                    Please wait ...
                </span>
            </div>
        </div>
    )
}