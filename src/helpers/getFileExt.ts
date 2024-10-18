export default function getFileExt(fileUrl: string) {
    const splitedFileName = fileUrl.split("?")[0].split(".");
    return splitedFileName[splitedFileName.length - 1];
}