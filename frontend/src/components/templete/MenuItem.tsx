import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: any
}
export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <div className={`flex flex-col justify-center items-center h-20 w-20`}>
                {props.icone}
                <span className={`text-xs font-ligh`}>{props.texto}</span>
            </div>
        )
    }

    return (
        <li
            className={`hover:bg-gray-100 text-gray-600 flex justify-center flex-row cursor-pointer ${props.className}`}
            onClick={props.onClick}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}