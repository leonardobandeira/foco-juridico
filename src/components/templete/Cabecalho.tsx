import useAppData from "../../data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"

interface CabecarioProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Cabecario(props: CabecarioProps) {
    const { tema, alternarTema } = useAppData()

    return (
        <div className="p-6">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
            </div>
        </div>
    )
}