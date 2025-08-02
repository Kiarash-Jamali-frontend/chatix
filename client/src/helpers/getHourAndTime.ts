import { format } from "date-fns";
import { Timestamp } from "firebase/firestore"

export default function getHourAndTime(timestamp: Timestamp) {
    const date = Timestamp.fromMillis(timestamp.toMillis()).toDate();

    return format(date, "hh:mm a");
}