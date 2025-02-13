import Profile from "./Profile";

type MessagePropTypes = {
    message: any;
    senderProfile?: Profile;
    isGroupMessage?: boolean;
    replayMessage: any;
};

export default MessagePropTypes;