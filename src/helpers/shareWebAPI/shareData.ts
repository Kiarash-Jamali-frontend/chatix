export default function shareData(data: ShareData): void {
    try {
        navigator.share(data);
    } catch (error) {
        console.error("error", error);
    }
}