import { toast } from "react-toastify";
import toastConf from "../../../utils/toastConfig";
import canBrowserShareData from "../shareWebAPI/canBrowserShareData";
import shareData from "../shareWebAPI/shareData";

const shareProfile = ({ name, email }: { name: string, email: string }) => {
    const sharedData: ShareData = {
        title: name,
        text: `This is my email, you can create new chat with me in chatix: ${email}`
    }
    if (canBrowserShareData(sharedData)) {
        shareData(sharedData);
    } else {
        toast.error("Your browser does not support this feature", toastConf);
    }
}

export default shareProfile;