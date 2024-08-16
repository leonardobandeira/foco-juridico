import Titulo from "../templete/Titulo";
import ItemLista from "./ItemLista";

export default function AlertasAtivos() {
    return (
        <div className={`
        flex flex-col px-8 min-w-[350] mb-8
        bg-white rounded-lg shadow-lg 
        `}>
            <div className={`
                border-b border-gray-400 py-2 mt-3
            `}>
                <Titulo titulo={'Alertas ativos'} subtitulo={'Alertas recentes'} />
            </div>

            <div className="">
                <ItemLista />
                <ItemLista />
                <ItemLista />
                <ItemLista />
                <ItemLista />
            </div>
        </div>
    )
}