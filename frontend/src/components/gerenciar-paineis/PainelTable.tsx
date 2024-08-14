import { useEffect, useState } from 'react';
import PainelRow from './PainelRow';
import PainelModal from './PainelModal';
import { getPaineis, updatePainel, createPainel, deletePainel } from '@/services/painelService';
import { Painel } from '@/data/context/types';
import TituloFormulario from '../form/TituloFormulario';

type PainelTableProps = {
    paineis: Painel[];
};

export default function PainelTable({ paineis: initialPaineis }: PainelTableProps) {
    const [selectedPainel, setSelectedPainel] = useState<Painel | null>(null);
    const [paineis, setPaineis] = useState<Painel[]>(initialPaineis);

    useEffect(() => {
        const fetchPaineis = async () => {
            try {
                const data = await getPaineis();
                const transformedData: Painel[] = data.map((painel: any) => ({
                    id: painel.id,
                    nome: painel.nome,
                    endereco: painel.endereco,
                    grupoId: painel.grupoId,
                    indicadores: painel.indicadores.map((indicador: any) => indicador.nome)
                }));
                setPaineis(transformedData);
            } catch (error) {
                console.error('Erro ao buscar paineis:', error);
            }
        };

        if (initialPaineis.length === 0) {
            fetchPaineis();
        }
    }, [initialPaineis]);

    const handleSavePainel = async (painel: Painel) => {
        try {
            if (painel.id) {
                await updatePainel(painel.id, painel);
            } else {
                await createPainel(painel);
            }
            const updatedPaineis = await getPaineis();
            setPaineis(updatedPaineis);
        } catch (error) {
            console.error('Erro ao salvar painel:', error);
        }
    };

    const handleDeletePainel = async (id: number) => {
        try {
            await deletePainel(id);
            const updatedPaineis = await getPaineis();
            setPaineis(updatedPaineis);
        } catch (error) {
            console.error('Erro ao deletar painel:', error);
        }
    };

    const handleEditClick = (painel: Painel) => {
        setSelectedPainel(painel);
    };

    const handleCloseModal = () => {
        setSelectedPainel(null);
    };

    return (
        <div className="container mx-auto p-4">
            <TituloFormulario titulo="Gerenciar Painéis" />
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nome</th>
                        <th className="py-2 px-4 border-b">Indicadores</th>
                        <th className="py-2 px-4 border-b">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {paineis.map((painel) => (
                        <PainelRow
                            key={painel.id}
                            painel={painel}
                            onEditClick={handleEditClick}
                        />
                    ))}
                </tbody>
            </table>

            {selectedPainel && (
                <PainelModal
                    painel={selectedPainel}
                    onClose={handleCloseModal}
                    onSave={handleSavePainel}
                    onDelete={handleDeletePainel}
                />
            )}
        </div>
    );
}
