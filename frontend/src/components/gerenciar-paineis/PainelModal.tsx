import { useState, useEffect } from 'react';
import { Painel, Indicador } from '@/data/context/types';

type PainelModalProps = {
    painel: Painel;
    onClose: () => void;
    onSave: (painel: Painel) => void;
    onDelete: (id: number) => void;
};

export default function PainelModal({ painel, onClose, onSave, onDelete }: PainelModalProps) {
    const [selectedPainel, setSelectedPainel] = useState<Painel>(painel);
    const [newIndicador, setNewIndicador] = useState<string>('');

    useEffect(() => {
        setSelectedPainel(painel);
    }, [painel]);

    const handleSaveEdit = () => {
        onSave(selectedPainel);
        onClose();
    };

    const handleDelete = () => {
        if (selectedPainel.id) {
            onDelete(selectedPainel.id);
        }
        onClose();
    };

    const handleAddIndicador = () => {
        if (newIndicador.trim() !== '') {
            const newIndicadorObj: Indicador = {
                id: Date.now(), // Usando timestamp como id temporário
                nome: newIndicador
            };
            setSelectedPainel((prevPainel) => ({
                ...prevPainel,
                indicadores: [...prevPainel.indicadores, newIndicadorObj],
            }));
            setNewIndicador('');
        }
    };

    const handleRemoveIndicador = (id: number) => {
        setSelectedPainel((prevPainel) => ({
            ...prevPainel,
            indicadores: prevPainel.indicadores.filter((indicador) => indicador.id !== id),
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Editar Painel</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        value={selectedPainel.nome}
                        onChange={(e) => setSelectedPainel({ ...selectedPainel, nome: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Endereço</label>
                    <input
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        value={selectedPainel.endereco}
                        onChange={(e) => setSelectedPainel({ ...selectedPainel, endereco: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-medium pb-2">Indicadores</h3>
                    <div className="flex space-x-2 mb-4">
                        <input
                            type="text"
                            className="p-2 border border-gray-300 rounded w-full"
                            value={newIndicador}
                            onChange={(e) => setNewIndicador(e.target.value)}
                            placeholder="Adicionar Indicador"
                        />
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded"
                            onClick={handleAddIndicador}
                        >
                            Adicionar
                        </button>
                    </div>
                    <div className="max-h-64 overflow-y-auto"> 
                        <table className="min-w-full bg-white border border-gray-300 mb-4">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Nome</th>
                                    <th className="py-2 px-4 border-b">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedPainel.indicadores.length > 0 ? (
                                    selectedPainel.indicadores.map((indicador) => (
                                        <tr key={indicador.id} className="text-center">
                                            <td className="py-2 px-4 border-b">{indicador.nome}</td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    className="bg-red-500 text-white py-1 px-3 rounded"
                                                    onClick={() => handleRemoveIndicador(indicador.id)}
                                                >
                                                    Remover
                                                </button>
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
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-red-500 text-white py-1 px-3 rounded"
                        onClick={handleDelete}
                    >
                        Excluir
                    </button>
                    <button
                        className="bg-green-500 text-white py-1 px-3 rounded"
                        onClick={handleSaveEdit}
                    >
                        Salvar
                    </button>
                    <button
                        className="bg-gray-500 text-white py-1 px-3 rounded"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
