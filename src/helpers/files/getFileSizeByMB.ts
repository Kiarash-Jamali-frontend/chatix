export default function getFileSizeByMB(size: number): number {
    return +(size / 10 ** 6).toFixed(2);
}