import { formatRelative, subDays } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { customLocale } from "../utils/formatRelativeLocale";

export default function customFormatRelative(timestamp: Timestamp) {
    return formatRelative(subDays(
        new Date(Timestamp.fromMillis(timestamp.seconds * 10 ** 3)
            .toDate()), 0),
        new Date(), {
        locale: customLocale
    })
}