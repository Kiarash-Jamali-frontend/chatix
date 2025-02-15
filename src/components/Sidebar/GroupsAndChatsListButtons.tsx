import { useSwiper } from "swiper/react";
import button from "../../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
    selectedList: "chats" | "groups";
}

export default function GroupsAndChatsListButtons({ selectedList }: PropTypes) {
    const swiper = useSwiper();

    return (
        <div className="relative -order-1">
            <div className={`w-[50%] absolute top-0 bottom-0 bg-gradient-to-br from-blue-400 to-blue-600 outline-[1px_solid] ${selectedList == "groups" ? "translate-x-[100%]" : "translate-x-0"} transition-all`}>

            </div>
            <div className="grid grid-cols-2 relative">
                <button onClick={() => {
                    swiper.slidePrev();
                }}
                    className={button({
                        intent: "default",
                        className: `rounded-none active:!scale-100 !bg-transparent !border-x-transparent ${selectedList == "chats" && "text-white border-y-transparent"}`
                    })}>
                    <FontAwesomeIcon icon={faUser} className="me-2" /> Chats
                </button>
                <button onClick={() => {
                    swiper.slideNext();
                }}
                    className={button({
                        intent: "default",
                        className: `rounded-none active:!scale-100 !bg-transparent !border-x-transparent ${selectedList == "groups" && "text-white border-y-transparent"}`
                    })}>
                    <FontAwesomeIcon icon={faUsers} className="me-2" /> Groups
                </button>
            </div>
        </div>
    )
}