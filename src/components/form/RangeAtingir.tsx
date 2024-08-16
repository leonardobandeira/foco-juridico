import { useEffect, useState } from "react";
import { TipoMeta } from '@/data/context/types';
import { getMetas } from "@/services/indicadorService";

interface AuthInputProps { }

function getTextoMag(mag: number): string {
    if ([2, 3, 5].includes(mag)) return 'a';
    if ([6].includes(mag)) return 'de';
    if ([1, 3, 4].includes(mag)) return 'que';
    return '';
}

export default function RangeAtingir(props: AuthInputProps) {
    const [mag, setMag] = useState<number>(1);
    const [valor, setValor] = useState<number>(45666);
    const [metas, setMetas] = useState<TipoMeta[]>([]);

    useEffect(() => {
        const fetchMetas = async () => {
            try {
                const data = await getMetas();
                setMetas(data)
            } catch (error) {
                console.error('Erro ao buscar metas:', error);
            }
        };

        if (metas.length === 0) {
            fetchMetas();
        }
    }, [metas.length]);

    const atualizaMag = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setMag(+event.target.value);
    };

    const handlerValor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoValor = Number(event.target.value);
        setValor(novoValor);
    };

    const handlerRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoValor = Number(event.target.value);
        setValor(novoValor);
    };

    return (
        <div className="flex flex-col mt-6">
            <label className="text-gray-400 font-normal tracking-wider">
                <span className="text-md text-black font-bold">
                    Alertar quando o valor
                </span>
                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    <div className="bg-gray-100 mt-4 h-auto flex flex-col items-center gap-2 justify-center p-6 rounded-3xl flex-grow">
                        <div className="flex flex-row gap-4 items-center text-bold text-black text-md">
                            <span>For</span>
                            <span className="text-base1 font-bold text-lg">
                                <select
                                    value={mag}
                                    onChange={atualizaMag}
                                    className="text-md text-center p-1"
                                >
                                    {metas.map((item, index) => (
                                        <option key={index} value={item.id} className="p-4">
                                            {item.nome}
                                        </option>
                                    ))}
                                </select>
                            </span>
                            <span>{getTextoMag(mag)}</span>
                            <input
                                className="w-24 text-center p-1"
                                type="number"
                                value={valor}
                                onChange={handlerValor}
                                min="0"
                                max="50000"
                            />
                        </div>
                        <input
                            className="w-[100%] self-center py-2 bg-transparent focus:bg-gray-50 text-black cursor-pointer"
                            type="range"
                            min="0"
                            max="50000"
                            step={10}
                            value={valor}
                            onChange={handlerRange}
                        />
                    </div>
                </div>
            </label>
        </div>
    );
}
