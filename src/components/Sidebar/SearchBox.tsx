import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type PropTypes = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export default function SearchBox({ search, setSearch }: PropTypes) {

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className="mb-3">
            <div className={`rounded-full py-2 px-3 flex items-center justify-between mx-4 border-2 ${isFocused ? "border-primary bg-secondary" : "bg-natural/5 hover:border-natural/15 border-natural/5"} transition-all flex items-center`}>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faSearch} className={isFocused ? "text-primary" : "text-natural/50"} />
                </div>
                <input
                    value={search}
                    name="searchInChats"
                    onChange={({ target }) => setSearch(target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type="text" placeholder="Search" dir="auto"
                    className="bg-transparent mx-2 grow placeholder:text-natural/50 font-Vazir placeholder:translate-y-0.5 focus:outline-hidden text-sm" />

                <AnimatePresence>
                    {
                        search && (
                            <motion.button
                                onClick={() => setSearch("")}
                                variants={{
                                    disabled: {
                                        opacity: 0,
                                        transform: "scale(0)"
                                    },
                                    enabled: {
                                        opacity: 1,
                                        transform: "scale(1)"
                                    }
                                }} initial="disabled" animate="enabled" exit="disabled"
                                transition={{
                                    duration: 0.15
                                }}
                                className="flex items-center justify-center cursor-pointer">
                                <FontAwesomeIcon icon={faClose} className="text-natural/50" />
                            </motion.button>
                        )
                    }
                </AnimatePresence>
                {/* <button disabled={!search} className="flex items-center justify-center cursor-pointer disabled:opacity-0 disabled:scale-0 size-4 transition-all">
                    <FontAwesomeIcon icon={faClose} className="text-black/50 me-2 size-4" />
                </button> */}
            </div>
        </div>
    )
}