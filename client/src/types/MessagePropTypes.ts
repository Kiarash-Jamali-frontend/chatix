import Profile from "./Profile";

type MessagePropTypes = {
    message: any;
    senderProfile?: Profile;
    isGroupMessage?: boolean;
    replayMessage: any;
    recipients: string[];
    isFile?: boolean
};

export default MessagePropTypes;