import { formatRelative, subDays } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { customformatRelativeLocale } from "../utils/formatRelativeLocale";
import FormatRelativeLocale from "../types/FormatRelativeLocale";

export default function customFormatRelative(timestamp: Timestamp, formatRelativeLocale?: FormatRelativeLocale) {
    return formatRelative(subDays(
        new Date(Timestamp.fromMillis(timestamp.seconds * 10 ** 3)
            .toDate()), 0),
        new Date(), {
        locale: customformatRelativeLocale(formatRelativeLocale)
    })
}