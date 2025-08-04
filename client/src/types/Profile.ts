type Profile = {
    name: string;
    photoUrl: string;
    lastActivity: any;
    biography: string;
    settings?: { enabled: boolean };
    oneSignalUserIds?: string[]
}

export default Profile;