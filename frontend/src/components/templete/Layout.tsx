import useAppData from "../../data/hook/useAppData"
import Cabecario from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {tema} = useAppData()
    
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`flex flex-col w-full p-6 bg-gray-50 dark:bg-gray-600`}>
                <Cabecario
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}