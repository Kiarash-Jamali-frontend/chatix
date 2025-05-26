import { cva } from "class-variance-authority";

const button = cva("text-center flex items-center disabled:pointer-events-none font-Inter disabled:opacity-70 justify-center font-medium rounded-lg transition-all active:scale-95 cursor-pointer", {
    variants: {
        intent: {
            default: "bg-secondary text-natural border hover:bg-base",
            primary: "bg-linear-to-br from-primary-400 to-primary-600 text-white",
            dark: "bg-natural/90 text-secondary/90 hover:bg-natural/85",
            primaryOutline: "bg-secondary text-primary-500 border border-primary-500 hover:bg-primary-500/5 hover:border-primary-600",
            danger: "bg-red-500 text-white hover:bg-red-600"
        },
        size: {
            small: "text-sm px-4 py-2",
            medium: "text-sm px-4 py-2.5",
            large: "py-3 text-sm"
        }
    },
    defaultVariants: {
        intent: "default",
        size: "medium"
    }
});

export default button;