import { cva } from "class-variance-authority";

const input = cva("block w-full max-w-none outline-hidden font-Vazir transition-all", {
    variants: {
        intent: {
            default: "border bg-secondary focus:border-natural/15 focus:ring focus:ring-offset-0 ring-natural/15"
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