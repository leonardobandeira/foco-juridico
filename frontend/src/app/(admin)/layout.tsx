"use client"

import Rodape from "@/components/Rodape"
import Conteudo from "@/components/templete/Conteudo"
import MenuTopo from "@/components/templete/MenuTopo/MenuTopo"
import { ReactNode } from "react"

interface LayoutProps {
    children?: ReactNode
}

export default function layout(props: LayoutProps) {

    return (
        <div className={`flex flex-col h-screen w-screen`}>
            <MenuTopo />
            <Conteudo>
                {props.children}
            </Conteudo>
            <Rodape />
        </div>
    )
}