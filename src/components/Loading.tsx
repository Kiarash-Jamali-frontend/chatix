export default function Loading() {
    return (
        <div className="z-999 fixed inset-0 w-full h-full bg-base before:absolute before:inset-0 before:bg-[url('/background.svg')] before:opacity-20 before:bg-base before:bg-contain before:bg-repeat before:z-0 flex items-center justify-center">
            <div className="flex items-center justify-center text-center bg-secondary rounded-xl py-4 px-6 z-10 relative border">
                <div className="size-9 border-[5px] animate-spin border-r-primary-500 border-l-primary-500 rounded-full">

                </div>
                <div className="flex flex-col ms-5 items-start">
                    <span className="text-primary-500 font-semibold">
                        Chatix
                    </span>
                    <span className="text-xs text-black/50 mt-1">
                        Please wait ...
                    </span>
                </div>
            </div>
        </div>
    )
}