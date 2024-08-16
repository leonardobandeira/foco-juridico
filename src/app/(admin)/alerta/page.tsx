"use client";

import Banner from "@/components/Banner";
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Input from "@/components/form/Input";
import Option from "@/components/form/ItemSelect";
import RangeAtingir from "@/components/form/RangeAtingir";
import RangerFrequencia from "@/components/form/RangerFrequencia";
import Select from "@/components/form/Select";
import TituloFormulario from "@/components/form/TituloFormulario";
import { Indicador, Painel } from "@/data/context/types";
import { getIndicadoresDoPainel, getPaineis } from "@/services/painelService";
import { ChartLine, Siren, TextSearch } from "lucide-react";
import { useEffect, useState } from "react";

interface ItemOption {
    nome: string;
    id: number;
}

export default function Alerta() {
    const [nome, setNome] = useState('');
    const [painel, setPainel] = useState('');
    const [indicador, setIndicador] = useState('');
    const [frequencia, setFrequencia] = useState(1);
    const [meta, setMeta] = useState(1);
    const [proximo, setProximo] = useState(false);

    const handleProximoClick = () => setProximo(true);
    const handleFinalizarClick = () => setProximo(false);

    const [paineis, setPaineis] = useState<ItemOption[]>([]);
    const [indicadores, setIndicadores] = useState<Indicador[]>([]);

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
                    console.log("Mudou o painel");
                } else {
                    console.error('Dados retornados não são um array:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar paineis:', error);
            }
        };
        fetchPaineis();
        console.log(paineis);
    }, []);

    useEffect(() => {
        const fetchIndicadores = async () => {
            if (painel) { // Adicionar uma verificação para painel
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
    }, [painel]); // Adicionar painel como dependência

    const fazerAlerta = () => {
        const alerta = {
            nome,
            painel,
            indicador,
            frequencia,
            meta,
        };

        console.log(alerta);
    };

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="flex flex-col w-full max-w-md">
                <TituloFormulario titulo="Criar alerta" className="pb-1" />
                <div className="w-full ">
                    {!proximo ? (
                        <Formulario>
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
                                onChange={(e) => setPainel(e.target.value)}
                                icone={ChartLine}
                            >
                                <option value="" disabled selected>Selecione...</option>
                                {paineis.map((item: ItemOption, index) => (
                                    <option key={index} value={item.id} className="p-4">
                                        {item.nome}
                                    </option>
                                ))}
                            </Select>

                            <Select
                                label="Indicador monitorado"
                                valor={indicador}
                                onChange={(e) => setIndicador(e.target.value)}
                                icone={TextSearch}
                            >
                                <option value="" disabled selected>Selecione...</option>
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
                                onClick={handleProximoClick}
                            />
                        </Formulario>
                    ) : (
                        <Formulario>
                            <RangerFrequencia frequencia={frequencia} onChange={setFrequencia} />
                            <RangeAtingir meta={meta} onChange={setMeta} />
                            <Botao
                                texto="Finalizar"
                                className="mt-8 w-full"
                                tipo="primario"
                                onClick={fazerAlerta}
                            />
                        </Formulario>
                    )}
                </div>
            </div>
        </div>
    );
}
