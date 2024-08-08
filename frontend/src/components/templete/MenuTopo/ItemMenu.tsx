import Link from "next/link";
import { ReactNode } from "react";

interface ItemMenuProps {
    path: string;
    style?: string
    children: ReactNode;
    onClick?: (evento: any) => void
}

export default function ItemMenu({ path = '', style = '', onClick = () => { console.log(path) }, children }: ItemMenuProps) {
    return (
        <Link href={path}
            onClick={onClick}
            className={`button flex items-center w-[200px] text-lg text-black border-b border-gray-50 px-3 py-2 bg-white
             hover:bg-gray-100 hover:font-semibold hover:text-xl
            ${style !== '' ? (style + ' hover:bg-red-100') : ''}`}
        >
            {children}
        </Link>
    );
}
