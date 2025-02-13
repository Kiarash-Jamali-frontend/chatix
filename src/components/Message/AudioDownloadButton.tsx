import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import downloadFile from "../../helpers/downloadFile";
import { useState } from "react";
import toastConf from "../../../utils/toastConfig";
import { toast, ToastContainer } from "react-toastify";

export default function AudioDownloadButton({ message }: { message: any }) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;

    const [pending, setPending] = useState<boolean>(false);

    const downloadFileHandler = () => {
        setPending(true);
        downloadFile(message.content, (errorMsg) => {
            if (errorMsg) {
                toast.error(errorMsg, toastConf);
            }
            setPending(false);
        });
    }

    return (
        <>
            <ToastContainer />
            <button onClick={downloadFileHandler}
                disabled={pending}
                data-is-button="true"
                className={`size-6 flex items-center justify-center text-xs rounded-full ${messageIsForCurrentUser ? "bg-white/10 text-white" : "bg-black/5 text-black"}`}>
                {
                    pending ? (
                        <div className="size-3 border border-e-transparent border-white rounded-full animate-spin">

                        </div>
                    ) : (
                        <FontAwesomeIcon icon={faDownload} />
                    )
                }
            </button>
        </>
    )
}