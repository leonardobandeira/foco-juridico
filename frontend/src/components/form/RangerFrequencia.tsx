import React, { useState, useEffect } from "react";

interface AuthInputProps {
    frequencia: number;
    onChange?: (novoValor: number) => void;
}

export default function RangerFrequencia(props: AuthInputProps) {
    const [dias, setDias] = useState<number>(1);
    const [horas, setHoras] = useState<number>(0);
    const [resto, setResto] = useState<number>(0);

    const numbers = Array.from({ length: 30 }, (_, i) => i + 1);

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
    }, [dias]);

    // Verifica se o resto é diferente de 0
    const exibirMeio = resto > 0;

    return (
        <div className="flex flex-col mt-6">
            <label className="text-gray-400 font-normal tracking-wider">
                <span className="text-2xl text-black font-bold">Frequência de monitoramento</span>
                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    <div className="bg-gray-100 mt-4 h-auto flex flex-col items-left gap-2 justify-center p-6 rounded-3xl flex-grow">
                        <span className="text-bold text-black text-2xl ">
                            Verificar a cada{" "}
                            <span className="text-base1 font-bold text-lg">
                                <select value={dias} onChange={atualizaFrequencia}>
                                    {numbers.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </span>
                            {` ${exibirMeio ? 'e meio' : ''} `}
                            dia
                        </span>
                        <input
                            className="w-[100%] self-center py-2 bg-transparent focus:bg-gray-50 text-black cursor-pointer"
                            type="range"
                            min="24"
                            max="720"
                            onChange={atualizaViaHoras}
                            required={true}
                        />
                        <span className="text-bold text-black">
                            Aproximadamente{" "}
                            <span className="font-bold">{horas}</span>{" "}
                            horas
                        </span>
                    </div>
                </div>
            </label>
        </div>
    );
}
