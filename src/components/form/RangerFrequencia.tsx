import { AlarmClock } from "lucide-react";
import React, { useState, useEffect } from "react";

interface RangerFrequenciaProps {
    frequencia: number;
    onChangeFrequencia: (novoValor: number) => void;
}

export default function RangerFrequencia(props: RangerFrequenciaProps) {
    const [dias, setDias] = useState<number>(15);
    const [vezesAoMes, setVezesAoMes] = useState<number>(2);
    const [horas, setHoras] = useState<number>(360);
    const [resto, setResto] = useState<number>(0);

    const dias_mes = Array.from({ length: 30 }, (_, i) => i + 1);

    const atualizaFrequencia = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const novoValor = Number(event.target.value);
        setDias(novoValor);
    };

    const atualizaViaHoras = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoValor = Number(event.target.value);
        const novoDias = Math.trunc(novoValor / 24);
        setDias(novoDias);
    };

    useEffect(() => {
        const horasCalculadas = dias * 24;
        const restoCalculado = horasCalculadas % 24;

        setHoras(horasCalculadas);
        setResto(restoCalculado);
        setVezesAoMes(Math.trunc(30 / dias))

        props.onChangeFrequencia(dias)
    }, [dias]);

    const exibirMeio = resto > 0;

    return (
        <div className="flex flex-col mt-6">
            <label className="text-gray-400 font-normal tracking-wider">
                <span className="text-md text-black font-bold flex flex-row items-center">
                    <AlarmClock className="mr-2 h-4 w-4 text-black" />Frequência de monitoramento
                </span>
                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    <div className="bg-gray-100 mt-4 h-auto flex flex-col items-center gap-2 justify-center p-6 rounded-3xl flex-grow">
                        <span className="text-bold text-black text-md ">
                            Verificar a cada{" "}
                            <span className="text-base1 font-bold text-md">
                                <select value={dias} onChange={atualizaFrequencia}>
                                    {dias_mes.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </span>
                            {` ${exibirMeio ? 'e meio' : ''} `}
                            {dias > 1 ? 'dias' : 'dia'}
                        </span>
                        <input
                            className="w-[100%] self-center bg-transparent focus:bg-gray-50 text-black cursor-pointer"
                            type="range"
                            min="24"
                            max="720"
                            onChange={atualizaViaHoras}
                            required={true}
                        />
                        <span className="text-bold text-black text-center">
                            <span className="font-bold">{vezesAoMes}x ao mês</span>
                            {" "}| Aproximadamente{" "}
                            <span className="font-bold">{horas}</span>{" "} horas

                        </span>
                    </div>
                </div>
            </label>
        </div>
    );
}
