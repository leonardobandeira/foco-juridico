import Titulo from "./Titulo"

interface CabecarioProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Cabecario(props: CabecarioProps) {
    return (
        <div>
            <Titulo
                titulo={props.titulo}
                subtitulo={props.subtitulo}
            />
        </div>
    )
}