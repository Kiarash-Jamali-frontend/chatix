export default function urlify(string: string) {
    let urlRegex = /(?<!src=")(https?:\/\/[^\s]+)/g;
    return string.replace(urlRegex, function (url) {
        return `<a target="_blank" href="${url}">${url}</a>`
    });
}