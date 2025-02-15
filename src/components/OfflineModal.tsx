import Lottie from "react-lottie-player";
import ConnectionFailed from "../lottie/ConnectionFailed.json";
import button from "../cva/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function OfflineModal() {

    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-[9999] bg-base flex flex-col justify-center items-center">
            <div className="flex flex-col items-center text-center">
                <Lottie unselectable="on" animationData={ConnectionFailed} loop={false} play
                    className="lg:max-w-96 lg:max-h-96 max-w-72 max-h-7max-w-72" />

                <h1 className="lg:text-2xl text-lg font-bold my-5">
                    The connection with the server has been lost
                </h1>
                <p className="lg:text-sm text-xs text-black/60">
                    Please make sure your Internet or Wi-Fi connection is correct
                </p>
                <button className={button({ className: "mt-5", intent: "primary" })}
                    onClick={() => navigate(0)}>
                    <FontAwesomeIcon icon={faRefresh} className="me-2" />
                    Refresh
                </button>
            </div>
        </div>
    )
}