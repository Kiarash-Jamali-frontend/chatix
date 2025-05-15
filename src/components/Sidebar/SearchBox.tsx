import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SearchBox() {

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className="pb-3">
            <div className={`rounded-full py-2 px-3 mx-4 border-2 ${isFocused ? "border-blue-500 bg-white" : "bg-black/5 hover:border-black/15 border-black/5"} transition-all flex items-center`}>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faSearch} className="text-black/50 me-2" />
                </div>
                <input
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type="text" placeholder="Search" dir="auto"
                    className="bg-transparent grow placeholder:text-black/50 font-Vazir placeholder:translate-y-0.5 focus:outline-hidden text-sm" />
            </div>
        </div>
    )
}