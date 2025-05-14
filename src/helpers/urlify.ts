import urlRegex from "url-regex";

export default function urlify(string: string) {
    return string.replace(urlRegex({exact: true, strict: false}), function (url) {
        return `<a target="_blank" href="${url}">${url}</a>`
    });
}