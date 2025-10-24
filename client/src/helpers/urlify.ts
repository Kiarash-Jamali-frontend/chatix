import urlRegex from "url-regex";

export default function urlify(string: string) {
    return string.replace(urlRegex({ exact: true, strict: false }), function (url) {
        // Don't treat as URL if it contains @ symbol
        if (url.includes('@')) {
            return url;
        }
        return `<a className="wrap-anywhere" target="_blank" href="${url}">${url}</a>`
    });
}