import gradient from 'random-gradient'
import ProfileImageSizes from '../types/ProfileImageSizes';

export default function GradiantProfile({ name, size }: { name: string, size: ProfileImageSizes }) {
    const bgGradient = { background: gradient(name) }
    const names = name.split(" ").slice(0, 2);

    return (
        <div className={`${size}
         rounded-full grid place-items-center uppercase text-white font-bold font-Vazir`} style={bgGradient}>
            <span>
                {names[0][0]}
                {names.length > 1 && names[1][0]}
            </span>
        </div>
    )
}