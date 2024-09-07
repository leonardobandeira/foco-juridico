import { CirclePlus, TextSearch } from "lucide-react";
import Botao from "../form/Botao";
import Input from "../form/Input";

interface IndicadorInputProps {
    newIndicador: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
}

export default function IndicadorInput({ newIndicador, onChange, onAdd }: IndicadorInputProps) {
    return (
        <div className="flex flex-col items-center space-x-2 mb-4">
            <Input
                label="Adicionar Indicador"
                tipo="text"
                valor={newIndicador}
                onChange={onChange}
                obrigatorio
                icone={TextSearch}
                className="mt-2"
            />
            <Input
                label="Chave de busca"
                tipo="text"
                valor={newIndicador}
                onChange={onChange}
                obrigatorio
                icone={TextSearch}
                className="mt-2"
            />
            <Botao
                texto="Adicionar"
                className={`mt-8 w-full h-10 self-end`}
                tipo="primario"
                onClick={onAdd}
                icone={CirclePlus}
            />
        </div>
    )
}
