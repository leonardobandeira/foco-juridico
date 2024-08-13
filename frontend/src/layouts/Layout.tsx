import Conteudo from "@/components/templete/Conteudo"
import MenuTopo from "@/components/templete/MenuTopo/MenuTopo"
import useAppData from "@/data/hook/useAppData"


interface LayoutProps {
    titulo?: string
    subtitulo?: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()

    return (
        <div className={`${tema} flex flex-col h-screen w-screen`}>
            <div className={`flex flex-col w-full bg-gray-50 dark:bg-gray-600`}>
                <MenuTopo />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>

            <div className="bg-base1 text-center font-semibold text-white text-md">
                {<strong className="font-thin">Foco Jurídico - 2024 | Desenvolvido por Leonardo Bandeira</strong>}
            </div></div>
    )
}