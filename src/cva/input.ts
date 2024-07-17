import { cva } from "class-variance-authority";

const input = cva("block w-full max-w-none outline-none", {
    variants: {
        intent: {
            default: "border bg-white focus:border-black/15"
        },
        size: {
            medium: "p-2 rounded-lg text-sm"
        }
    },
    defaultVariants: {
        intent: "default",
        size: "medium"
    }
})

export default input;