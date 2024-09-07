import { useEffect, useState } from 'react';
import PainelRow from './PainelRow';
import PainelModal from './PainelModal';
import { getPaineis, updatePainel, createPainel, deletePainel } from '@/app/services/painelService';
import { Painel } from '@/data/context/types';
import TituloFormulario from '../form/TituloFormulario';
import useAppData from '@/data/hook/useAppData';
import Botao from '../form/Botao';
import { PlusCircleIcon } from 'lucide-react';

type PainelTableProps = {
    paineis: Painel[];
};

export default function PainelTable({ paineis: initialPaineis }: PainelTableProps) {
    const [selectedPainel, setSelectedPainel] = useState<Painel | null>(null);
    const [paineis, setPaineis] = useState<Painel[]>(initialPaineis);
    const [modalModo, setModalModo] = useState(false);
    const { usuario } = useAppData();

    useEffect(() => {
        const fetchPaineis = async () => {
            try {
                const data = await getPaineis(usuario.token);
                const transformedData: Painel[] = data.map((painel: any) => ({
                    id: painel.id,
                    nome: painel.nome,
                    endereco: painel.endereco,
                    grupoId: painel.grupoId,
                    indicadores: painel.indicadores.map((indicador: any) => indicador.nome)
                }));
                setPaineis(transformedData);
            } catch (error) {
                console.error('Erro ao buscar paineis table:', error);
            }
        };

        if (initialPaineis.length === 0) {
            fetchPaineis();
        }
    }, [initialPaineis]);

    const handleSavePainel = async (painel: Painel) => {
        try {
            if (painel.id) {
                await updatePainel(painel.id, painel, usuario.token);
            } else {
                await createPainel(painel, usuario.token);
            }
            const updatedPaineis = await getPaineis(usuario.token);
            setPaineis(updatedPaineis);
        } catch (error) {
            console.error('Erro ao salvar painel:', error);
        }
    };

    const handleDeletePainel = async (id: number) => {
        try {
            await deletePainel(id, usuario.token);
            const updatedPaineis = await getPaineis(usuario.token);
            setPaineis(updatedPaineis);
        } catch (error) {
            console.error('Erro ao deletar painel:', error);
        }
    };

    const handleEditClick = (painel: Painel) => {
        setSelectedPainel(painel);
        setModalModo(false);
    };
    
    const handleCreateClick = (painel: Painel) => {
        setModalModo(true);
    };

    const handleCloseModal = () => {
        setSelectedPainel(null);
    };

    return (
        <div className="container mx-auto p-4  ">
            <div className='flex flex-row justify-between items-center'>
            <TituloFormulario titulo="Gerenciar Painéis" />
            <Botao
                texto="Adicionar painiel"
                className={`w-auto  mb-3 hover:bg-blue-800`}
                tipo="outline"
                icone={PlusCircleIcon}
                onClick={() => { }}
            />
            </div>
            
            <table className="w-full text-xl rtl:text-right text-gray-500 dark:text-gray-400 text-center">
                <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Nome</th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Indicadores</th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ações</th>
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

            {modalModo && (
                <PainelModal
                    onClose={handleCloseModal}
                    onSave={handleSavePainel}
                    onDelete={handleDeletePainel}
                />
            )}
        </div>
    );
}
