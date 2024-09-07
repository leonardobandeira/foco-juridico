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
import { ArrowBigRight, ChartLine, CircleX, PlusCircle, Siren, TextSearch, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";
import useAppData from "@/data/hook/useAppData";
import { createAlerta } from "@/app/services/alertaService";

export default function Alerta() {
    const [nome, setNome] = useState('');
    const [painel, setPainel] = useState<number | null>(null);
    const [indicadorId, setIndicadorId] = useState<number | null>(null);
    const [frequencia, setFrequencia] = useState(0);
    const [valor, setValor] = useState(1);
    const [tipoMetaId, setTipoMetaId] = useState(1);
    const [proximo, setProximo] = useState(true);
    const [statusCriacao, setStatusCriacao] = useState(500);
    const { usuario } = useAppData();

    const [paineis, setPaineis] = useState<ItemOption[]>([]);
    const [indicadores, setIndicadores] = useState<ItemOption[]>([]);

    useEffect(() => {
        const fetchPaineis = async () => {
            try {
                const data = await getPaineis(usuario.token);
                if (Array.isArray(data)) {
                    const transformedData = data.map((painel: any) => ({
                        id: painel.id,
                        nome: painel.nome,
                    }));
                    setPaineis(transformedData);
                } else {
                    console.error('Dados retornados não são um array:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar paineis página:', error);
            }
        };
        fetchPaineis();
    }, []);

    useEffect(() => {
        const fetchIndicadores = async () => {
            if (painel) {
                try {
                    const data = await getIndicadoresDoPainel(painel, usuario.token);
                    if (Array.isArray(data)) {
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

        if (indicadorId === null) {
            console.error("Indicador não selecionado.");
            return;
        }

        const alerta = {
            usuarioId: 2,
            nome,
            frequencia,
            indicadorId,
            tipoMetaId,
            valor
        };

        createAlerta(alerta, usuario.token);
        setStatusCriacao(200);
    };

    let formContent;

    if (!proximo && statusCriacao == 0) {
        formContent = (
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
                    valor={painel ?? ''}
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
        );
    } else if (statusCriacao === 0 && proximo) {
        formContent = (
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
        );
    } else if (statusCriacao !== 0) {
        formContent = statusCriacao == 200 ? (
            <div className="flex flex-col justify-center items-center bg-gray-50 px-12 py-6 rounded-lg">
                <CircleCheckBig className="mb-4 h-12 w-12 text-base1 " />
                <h1 className="text-black-400 text-lg font-semibold text-center">Sucesso ao criar alerta!</h1>

                <Botao
                    texto="Criar outro alerta"
                    className="mt-8 w-full"
                    tipo="outline"
                    icone={PlusCircle}
                />

            </div>
        ) : (
            <div className="flex flex-col justify-center items-center bg-gray-50 px-12 py-6 rounded-lg">
                <CircleX className="mb-4 h-12 w-12 text-red-700 " />
                <h1 className="text-black-400 text-lg font-semibold text-center">Erro ao criar alerta!</h1>

                <Botao
                    texto="Tentar novamente?"
                    className="mt-8 w-full"
                    tipo="outline"
                />

            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="flex flex-col w-full max-w-md">
                <TituloFormulario titulo="Criar alerta" className="pb-1" />
                <div className="w-full">
                    {formContent}
                </div>
            </div>
        </div>
    );
}
