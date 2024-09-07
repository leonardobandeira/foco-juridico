import { Painel } from '@/data/context/types';
import Botao from '../form/Botao';
import { Trash } from 'lucide-react';

type PainelRowProps = {
    painel: Painel;
    onEditClick: (painel: Painel) => void;
};

export default function PainelRow({ painel, onEditClick }: PainelRowProps) {
    const indicadores = painel.indicadores ?? [];

    return (
        <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{painel.nome}</td>
            <td className="px-6 py-4">
                {indicadores.length > 0
                    ? indicadores.map((indicador) => indicador.nome).join(', ')
                    : 'Sem Indicadores'}
            </td>
            <td className="px-6 justify-center py-4 flex flex-row gap-2">
                <Botao
                    texto="Editar"
                    className={`w-auto bg-base1 hover:bg-blue-800`}
                    tipo="primario"
                    onClick={() => onEditClick(painel)}
                />
                <Botao
                    texto="Excluir"
                    className={`w-auto bg-red-400 hover:bg-red-800`}
                    tipo="primario"
                    onClick={() => onEditClick(painel)}
                    icone={Trash}
                />
            </td>
        </tr>
    );
}
