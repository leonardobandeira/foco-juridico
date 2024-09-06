"use client";

import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Input from "@/components/form/Input";
import RangeAtingir from "@/components/form/RangeAtingir";
import RangerFrequencia from "@/components/form/RangerFrequencia";
import Select from "@/components/form/Select";
import TituloFormulario from "@/components/form/TituloFormulario";
import { ItemOption } from "@/data/context/types";
import { getIndicadoresDoPainel, getPaineis } from "@/app/services/painelService";
import { ArrowBigRight, ChartLine, Siren, TextSearch, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { creatAlerta } from "@/app/services/alertaService";

export default function Alerta() {
    const [nome, setNome] = useState('');
    const [painel, setPainel] = useState<number | null>(null);
    const [indicadorId, setIndicadorId] = useState<number | null>(null);
    const [frequencia, setFrequencia] = useState(0);
    const [valor, setValor] = useState(1);
    const [tipoMetaId, setTipoMetaId] = useState(1);
    const [proximo, setProximo] = useState(false);

    const [paineis, setPaineis] = useState<ItemOption[]>([]);
    const [indicadores, setIndicadores] = useState<ItemOption[]>([]);

    useEffect(() => {
        const fetchPaineis = async () => {
            try {
                const data = await getPaineis();
                if (data) {
                    const transformedData = data.map((painel: any) => ({
                        id: painel.id,
                        nome: painel.nome,
                    }));
                    setPaineis(transformedData);
                } else {
                    console.error('Dados retornados não são um array:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar paineis:', error);
            }
        };
        fetchPaineis();
    }, []);

    useEffect(() => {
        const fetchIndicadores = async () => {
            if (painel) {
                try {
                    const data = await getIndicadoresDoPainel(+painel);
                    if (data) {
                        const transformedData = data.map((indicador: any) => ({
                            id: indicador.id,
                            nome: indicador.nome,
                        }));
                        setIndicadores(transformedData);
                    } else {
                        console.error('Dados retornados não são um array:', data);
                    }
                } catch (error) {
                    console.error('Erro ao buscar indicadores:', error);
                }
            }
        };
        fetchIndicadores();
    }, [painel]);

    const handleProximoClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setProximo(true);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Verificação se o indicadorId é null
        if (indicadorId === null) {
            console.error("Indicador não selecionado.");
            return;  // Interrompe a execução se for null
        }

        const alerta = {
            usuarioId: 2,
            nome,
            frequencia,
            indicadorId,  // Aqui garantimos que indicadorId não seja null
            tipoMetaId,
            valor
        };

        creatAlerta(alerta);
    };

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="flex flex-col w-full max-w-md">
                <TituloFormulario titulo="Criar alerta" className="pb-1" />
                <div className="w-full ">
                    {!proximo ? (
                        <Formulario onSubmit={handleProximoClick}>
                            <Input
                                label="Nome do alerta"
                                tipo="text"
                                valor={nome}
                                onChange={(e) => setNome(e.target.value)}
                                obrigatorio
                                icone={Siren}
                            />
                            <Select
                                label="Painel monitorado"
                                valor={painel}
                                onChange={(e) => setPainel(+e.target.value)}
                                icone={ChartLine}
                                obrigatorio
                            >
                                <option value="" disabled>Selecione...</option>
                                {paineis.map((item: ItemOption, index) => (
                                    <option key={index} value={item.id} className="p-4">
                                        {item.nome}
                                    </option>
                                ))}
                            </Select>

                            <Select
                                label="Indicador monitorado"
                                valor={indicadorId ?? ''}
                                onChange={(e) => setIndicadorId(+e.target.value)}
                                icone={TextSearch}
                                obrigatorio
                            >
                                <option value="" disabled>Selecione...</option>
                                {indicadores.map((item: ItemOption, index) => (
                                    <option key={index} value={item.id} className="p-4">
                                        {item.nome}
                                    </option>
                                ))}
                            </Select>
                            <Botao
                                texto="Próximo"
                                className="mt-8 w-full"
                                tipo="primario"
                                icone={ArrowBigRight}
                            />
                        </Formulario>
                    ) : (
                        <Formulario onSubmit={handleFormSubmit}>
                            <RangerFrequencia frequencia={frequencia} onChangeFrequencia={setFrequencia} />
                            <RangeAtingir onChangeMeta={setValor} onChangeCondicao={setTipoMetaId} />
                            <Botao
                                texto="Criar alerta"
                                className="mt-8 w-full"
                                tipo="primario"
                                icone={ThumbsUp}
                            />
                        </Formulario>
                    )}
                </div>
            </div>
        </div>
    );
}
