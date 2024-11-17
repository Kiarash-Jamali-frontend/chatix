import { Timestamp } from "firebase/firestore"

export default function getHourAndTime(timestamp: Timestamp) {
    const date = Timestamp.fromMillis(timestamp.toMillis()).toDate();

    const hours = `${date.getHours() <= 9 ? "0" : ""}${date.getHours()}`;
    const mins = `${date.getMinutes() <= 9 ? "0" : ""}${date.getMinutes()}`;

    return `${hours}:${mins}`;
}