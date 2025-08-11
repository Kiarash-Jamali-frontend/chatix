type Profile = {
    name: string;
    photoUrl: string;
    lastActivity: any;
    biography: string;
    notificationSettings?: { enabled: boolean };
    oneSignalUserIds?: string[]
    showOnlineStatus?: boolean;
}

export default Profile;