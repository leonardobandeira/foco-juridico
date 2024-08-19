"use client";

import { ReactNode, useState } from "react";
import Foto from "./Foto";
import ItemMenu from "@/components/templete/MenuTopo/ItemMenu";
import useAppData from "@/data/hook/useAppData";

interface DropDownProps {
    children: ReactNode;
}

export default function CartaoPessoal({ children }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { usuario } = useAppData();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="relative cursor-pointer" onClick={toggleDropdown}>
            <div className="flex items-center rounded px-3 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none">
                <div className="flex gap-3 items-center">
                    <div className="flex flex-col items-end">
                        <span className="text-lg font-bold leading-5">{usuario.nome}</span>
                        <span className="text-xs text-zinc-400">{usuario.email}</span>
                    </div>
                    <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10 bg-zinc-700">
                        <Foto classes="rounded-full w-10 h-10 object-cover" />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute bg-white border border-gray-200 shadow-md rounded-xl w-[200px] max-w-full overflow-hidden mt-2 right-0">
                    {children}
                </div>
            )}
        </div>
    );
}
