import { useState, useEffect, useCallback } from 'react';
import { Painel, Indicador } from '@/data/context/types';
import IndicadorInput from './IndicadorInput';
import IndicadoresTable from './IndicadoresTable';
import Input from '../form/Input';
import { Link, ChartLine, Trash, Save, SquareArrowOutDownRight } from 'lucide-react';
import Botao from '../form/Botao';
import TituloFormulario from '../form/TituloFormulario';

type PainelModalProps = {
    painel: Painel;
    onClose: () => void;
    onSave: (painel: Painel) => void;
    onDelete: (id: number) => void;
};

export default function PainelModal({ painel, onClose, onSave, onDelete }: PainelModalProps) {
    const [selectedPainel, setSelectedPainel] = useState<Painel>({
        ...painel,
        indicadores: painel.indicadores ?? [],
    });
    const [newIndicador, setNewIndicador] = useState<string>('');

    useEffect(() => {
        setSelectedPainel({
            ...painel,
            indicadores: painel.indicadores ?? [],
        });
    }, [painel]);

    const handleSaveEdit = useCallback(() => {
        onSave(selectedPainel);
        onClose();
    }, [onSave, onClose, selectedPainel]);

    const handleDelete = useCallback(() => {
        if (selectedPainel.id) {
            onDelete(selectedPainel.id);
        }
        onClose();
    }, [onDelete, onClose, selectedPainel]);

    const handleAddIndicador = useCallback(() => {
        if (newIndicador.trim() !== '') {
            const newIndicadorObj: Indicador = {
                id: Date.now(),
                nome: newIndicador,
            };
            setSelectedPainel((prevPainel) => ({
                ...prevPainel,
                indicadores: [...(prevPainel.indicadores ?? []), newIndicadorObj],
            }));
            setNewIndicador('');
        }
    }, [newIndicador]);

    const handleRemoveIndicador = useCallback((id: number) => {
        setSelectedPainel((prevPainel) => ({
            ...prevPainel,
            indicadores: (prevPainel.indicadores ?? []).filter((indicador) => indicador.id !== id),
        }));
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <TituloFormulario titulo="Editar Painel" className="pb-3"/>
                <Input
                    label="Nome do Painel"
                    tipo="text"
                    valor={selectedPainel.nome}
                    onChange={(e) => setSelectedPainel({ ...selectedPainel, nome: e.target.value })}
                    obrigatorio
                    className="mt-2"
                    icone={ChartLine}
                />
                <Input
                    label="Endereço do Painel"
                    tipo="text"
                    valor={selectedPainel.endereco}
                    onChange={(e) => setSelectedPainel({ ...selectedPainel, endereco: e.target.value })}
                    obrigatorio
                    className="mt-2"
                    icone={Link}
                />
                <div className="mt-4">
                    <IndicadorInput
                        newIndicador={newIndicador}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewIndicador(e.target.value)}
                        onAdd={handleAddIndicador}
                    />
                    <IndicadoresTable
                        indicadores={selectedPainel.indicadores ?? []}
                        onRemove={handleRemoveIndicador}
                    />
                </div>
                <div className="flex justify-end space-x-2">

                    <Botao
                        texto="Excluir"
                        className={`w-auto bg-red-400 hover:bg-red-800`}
                        tipo="primario"
                        onClick={handleDelete}
                        icone={Trash}
                    />
                    <Botao
                        texto="Salvar"
                        className={`w-auto `}
                        tipo="primario"
                        onClick={handleSaveEdit}
                        icone={Save}
                    />
                    <Botao
                        texto="Fechar"
                        className={`w-auto`}
                        tipo="secundario"
                        onClick={onClose}
                        icone={SquareArrowOutDownRight}
                    />
                </div>
            </div>
        </div>
    );
}
