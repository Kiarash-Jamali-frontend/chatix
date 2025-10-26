import { Variants } from "framer-motion";

export const collapse: Variants = {
    invisible: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: "auto"
    }
}

export const scaleAndOpacity: Variants = {
    invisible: {
        opacity: 0,
        transform: "scale(0)"
    },
    visible: {
        opacity: 1,
        transform: "scale(1)"
    }
}