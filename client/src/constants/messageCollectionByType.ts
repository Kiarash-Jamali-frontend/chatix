import MessageType from "../types/MessageType";

const messageCollectionByType = {
    [MessageType.PRIVATE]: "chat_message",
    [MessageType.GROUP]: "group_message",
    [MessageType.CHANNEL]: "channel_message"
};

export default messageCollectionByType;