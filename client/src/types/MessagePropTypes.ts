import MessageType from "./MessageType";
import Profile from "./Profile";

type MessagePropTypes = {
    message: any;
    senderProfile?: Profile;
    type: MessageType;
    replayMessage: any;
    recipients: string[];
    isFile?: boolean
};

export default MessagePropTypes;