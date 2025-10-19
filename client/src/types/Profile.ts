type Profile = {
    name: string;
    photoUrl: string;
    lastActivity: any;
    biography: string;
    notificationSettings?: { enabled: boolean };
    oneSignalUserIds?: string[]
    showOnlineStatus?: boolean;
    isOnline: boolean;
    stickerPacksIds: string[];
}

export default Profile;