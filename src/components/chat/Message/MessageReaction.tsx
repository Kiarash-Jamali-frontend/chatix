import { Parser } from "html-to-react";
import changeReaction from "../../../helpers/changeReaction";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

export default function MessageReaction({ message }: { message: any }) {
    const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
    const messageIsForCurrentUser = userEmail === message.from;
    const { parse } = Parser();
    return (
        <>
            {
                message.reaction && (
                    <button className={`flex items-end top-0 bottom-0 z-20 mx-1 ${!messageIsForCurrentUser ? "" : "cursor-default"}`}
                        onClick={() => {
                            !messageIsForCurrentUser && changeReaction(message.id, "")
                        }}>
                        <div className="size-8 border flex items-center justify-center bg-white rounded-full">
                            {parse(message.reaction)}
                        </div>
                    </button>
                )
            }
        </>
    )
}