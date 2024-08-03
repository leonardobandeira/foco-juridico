"use client";

import Banner from "@/components/auth/Banner";
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Input from "@/components/form/Input";
import Option from "@/components/form/ItemSelect";
import RangeAtingir from "@/components/form/RangeAtingir";
import RangerFrequencia from "@/components/form/RangerFrequencia";
import Select from "@/components/form/Select";
import AlertasAtivos from "@/components/listas/AlertasAtivos";
import Layout from "@/components/templete/Layout";
import { useState } from "react";

export default function Home() {
    let ladoEsquerdo = <Banner />;
    let ladoDireito = <Banner />;
    let rodape = null;
    const [nome, setNome] = useState('Alerta');
    const [painel, setPainel] = useState('Tempo de Movimentação');
    const [indicador, setIndicador] = useState('Processos com mais de 2 anos');
    const [frequencia, setFrequencia] = useState(1);
    const [bater, setBater] = useState('Alerta');
    const [proximo, setProximo] = useState(false);

    return (
        <Layout>
            <div className={`flex md:flex-row flex-col w-full justify-evenly`}>
                <div className={`w-full max-w-md px-4`}>
                    {!proximo && (
                        <Formulario titulo="Criar alerta">
                            <Input
                                label="Nome do alerta"
                                tipo="text"
                                valor={nome}
                                onChange={setNome}
                            />
                            <Select label="Painel monitorado" valor={painel} onChange={setPainel}>
                                <Option texto="Tempo de Movimentação" />
                            </Select>
                            <Select label="Indicador monitorado" valor={indicador} onChange={setIndicador}>
                                <Option texto="Processos com mais de 2 anos" />
                            </Select>
                            <Botao
                                texto="Próximo"
                                className={`mt-8 w-full`}
                                tipo="primario"
                                onClick={() => setProximo(true)}
                            />
                        </Formulario>
                    )}

                    {proximo && (
                        <Formulario titulo="Criar alerta">
                            <RangerFrequencia frequencia={frequencia} onChange={setFrequencia} />
                            <RangeAtingir  />
                            <Botao
                                texto="Finalizar"
                                className={`mt-8 w-full`}
                                tipo="primario"
                                onClick={() => setProximo(false)}
                            />
                        </Formulario>
                    )}
                </div>
            </div>
        </Layout>
    );
}
