import { ArrowBigDown } from "lucide-react";
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
                <ItemLista icone={ArrowBigDown} nome="30 dias sem movimentação" painel="Painel de Tempo de Movimentação" valor="Maior que 10.000"/>
                <ItemLista icone={ArrowBigDown} nome="Processos a prescrever" painel="Painel de Prescrição" valor="Maior que 30"/>
            </div>
        </div>
    )
}