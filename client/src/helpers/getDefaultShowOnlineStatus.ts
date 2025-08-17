export default function getDefaultShowOnlineStatus(showOnlineStatus: boolean | undefined): boolean {
    return typeof showOnlineStatus == "boolean" ? showOnlineStatus : true;
}