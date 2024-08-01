import Titulo from "../templete/Titulo";
import ItemLista from "./ItemLista";

export default function AlertasAtivos() {
    return (
        <div className="flex flex-col md:px-6 px-6">
            <div>
                <Titulo titulo={'Alertas ativos'} subtitulo={'Alertas recentes'} />
            </div>
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
        </div>
    )
}