export default function canBrowserShareData(data: ShareData): boolean {
    if (!navigator.share || !navigator.canShare) {
        return false;
    }

    return navigator.canShare(data);
}