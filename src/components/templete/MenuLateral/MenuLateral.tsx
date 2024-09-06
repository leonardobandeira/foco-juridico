import Logo from "../Logo";
import MenuItem from "./MenuLateralItem";

export default function MenuLateral() {
    const isVisible = true
    return (<aside className={`md:hidden ${isVisible ? 'flex flex-col items-center justify-center' : 'hidden'} dark:bg-gray-900 dark:text-gray-200`}>
        <div className={`
            h-40 w-40
            flex flex-col
            justify-center
            items-center
            p-2
            `}>
            <Logo />
        </div>

        <ul className={`flex-grow`}>
        </ul>
        <ul className={``}>
        </ul>
    </aside>
    )
}