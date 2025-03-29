import { cva } from "class-variance-authority";

const button = cva("text-center flex items-center disabled:pointer-events-none font-Inter disabled:opacity-70 justify-center font-medium rounded-lg transition-all duration-300 active:scale-95 cursor-pointer", {
    variants: {
        intent: {
            default: "bg-white text-black border hover:bg-base",
            primary: "bg-gradient-to-br from-blue-400 to-blue-600 text-white",
            dark: "bg-black/90 text-white/90 hover:bg-black/85",
            primaryOutline: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-500/5 hover:border-blue-600",
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