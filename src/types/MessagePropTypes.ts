import Profile from "./Profile";

type MessagePropTypes = {
    message: any;
    senderProfile?: Profile;
    isGroupMessage?: boolean;
};

export default MessagePropTypes;