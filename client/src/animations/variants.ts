import { Variants } from "framer-motion";

export const collapseAnimation: Variants = {
    invisible: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: "auto"
    }
}