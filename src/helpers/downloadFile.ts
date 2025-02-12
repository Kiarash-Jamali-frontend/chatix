import getFileExt from "./files/getFileExt";

export default function downloadFile(link: string, callbackFn: (errorMsg: string | null) => unknown) {
    fetch(link)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network Problem");
            }
            return res.blob();
        })
        .then((file) => {
            const ex = getFileExt(link);
            let tUrl = URL.createObjectURL(file);
            const tmp1 = document.createElement("a");
            tmp1.href = tUrl;
            tmp1.download = `downloaded_file.${ex}`;
            document.body.appendChild(tmp1);
            tmp1.click();
            URL.revokeObjectURL(tUrl);
            tmp1.remove();
        })
        .then(() => {
            callbackFn(null);
        })
        .catch((e: Error) => {
            callbackFn(e.message);
        })
}