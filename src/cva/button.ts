import { cva } from "class-variance-authority";

const button = cva("text-center flex items-center justify-center font-medium rounded-lg transition-all duration-300 active:scale-95", {
    variants: {
        intent: {
            default: "bg-white text-black border",
            dark: "bg-black/90 text-white/90 hover:bg-black/85",
        },
        size: {
            medium: "text-sm px-4 py-2",
            large: "py-3 text-sm"
        }
    },
    defaultVariants: {
        intent: "default",
        size: "medium"
    }
});

export default button;