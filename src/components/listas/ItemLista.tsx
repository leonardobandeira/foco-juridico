import { LucideIcon } from "lucide-react";

interface ItemListaProps {
    nome: string,
    painel: string,
    valor: string,
    icone: LucideIcon
}

export default function ItemLista(props: ItemListaProps) {
    const { icone: Icon } = props;

    return (
        <div className="my-2 p-2 flex items-center border-b border-gray-100">
            {Icon && <Icon className={`ml-2 h-12 w-12 text-base1`} />}
            <div className="w-2/3 flex flex-col ml-4">
                <strong className="text-black">{props.nome}</strong>
                <span className="text-gray-400">{props.painel}</span>
            </div>

            <div className="flex flex-grow justify-end">
                <strong className="text-black">Gatinlho:</strong>{props.valor}
            </div>
        </div>
    );
}
