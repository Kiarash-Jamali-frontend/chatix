const toDataURL = async (url: string) => {
    const response = await fetch(url)
    const blobData = await response.blob()
    const imageDataUrl = URL.createObjectURL(blobData);

    return imageDataUrl;
};

export default toDataURL;