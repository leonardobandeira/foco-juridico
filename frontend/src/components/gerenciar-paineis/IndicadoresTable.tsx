import { Indicador } from '@/data/context/types';
import Botao from '../form/Botao';
import { CircleMinus } from 'lucide-react';

interface IndicadoresTableProps {
    indicadores: Indicador[];
    onRemove: (id: number) => void;
}

export default function IndicadoresTable({ indicadores, onRemove }: IndicadoresTableProps) {
    return <div className="max-h-64 overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300 mb-4">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Nome</th>
                    <th className="py-2 px-4 border-b">Ações</th>
                </tr>
            </thead>
            <tbody>
                {indicadores.length > 0 ? (
                    indicadores.map((indicador) => (
                        <tr key={indicador.id} className="text-center">
                            <td className="py-2 px-4 border-b">{indicador.nome}</td>
                            <td className="py-2 px-4 border-b flex items-center justify-center">
                                <Botao
                                    texto="Excluir"
                                    className="w-auto h-10 py-1 px-3 rounded mt-0"
                                    tipo="secundario"
                                    onClick={() => onRemove(indicador.id)}
                                    icone={CircleMinus}
                                />
                            </td>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2} className="py-2 px-4 border-b text-center">Sem Indicadores</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}
