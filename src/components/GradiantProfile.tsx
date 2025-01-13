import gradient from 'random-gradient'

export default function GradiantProfile({ name, size }: { name: string, size?: "sm" | "md" | "lg" | "xl" }) {
    const bgGradient = { background: gradient(name) }
    const names = name.split(" ").slice(0, 2);

    return (
        <div className={`${size == "sm" && "size-10"} ${size == "md" || !size && "size-12"} ${size == "lg" && "size-14"} ${size == "xl" && "size-16"}
         rounded-full grid place-items-center uppercase text-white font-bold font-Vazir`} style={bgGradient}>
            <span className={`${(!size || size == "md") && "text-xl"} ${size == "sm" && "text-[1rem]"} ${size == "lg" && "text-2xl"} ${size == "xl" && "text-3xl"}`}>
                {names[0][0]}
                {names.length > 1 && names[1][0]}
            </span>
        </div>
    )
}