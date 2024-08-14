import { Painel } from '@/data/context/types';

type PainelRowProps = {
    painel: Painel;
    onEditClick: (painel: Painel) => void;
};

export default function PainelRow({ painel, onEditClick }: PainelRowProps) {
    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{painel.nome}</td>
            <td className="py-2 px-4 border-b">
                {painel.indicadores.length > 0
                    ? painel.indicadores.map((indicador) => indicador.nome).join(', ')
                    : 'Sem Indicadores'}
            </td>
            <td className="py-2 px-4 border-b">
                <button
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                    onClick={() => onEditClick(painel)}
                >
                    Editar
                </button>
            </td>
        </tr>
    );
}
