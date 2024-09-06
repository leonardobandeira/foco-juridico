import { useEffect, useState } from "react";
import { TipoMeta } from '@/data/context/types';
import { getMetas } from "@/app/services/indicadorService";
import { Target } from "lucide-react";

interface RangeAtingirProps {
    onChangeMeta: (valor: number) => void;
    onChangeCondicao: (condicao: number) => void;
}

function getTextoMag(mag: number): string {
    if ([2, 3, 5].includes(mag)) return 'a';
    if ([6].includes(mag)) return 'de';
    if ([1, 3, 4].includes(mag)) return 'que';
    return '';
}

export default function RangeAtingir({ onChangeMeta, onChangeCondicao }: RangeAtingirProps) {
    const [mag, setMag] = useState<number>(1);
    const [valor, setValor] = useState<number>(1);
    const [metas, setMetas] = useState<TipoMeta[]>([]);

    useEffect(() => {
        const fetchMetas = async () => {
            try {
                const data = await getMetas();
                setMetas(data);
            } catch (error) {
                console.error('Erro ao buscar metas:', error);
            }
        };

        fetchMetas();
    }, []);

    useEffect(() => {
        onChangeMeta(valor)
        onChangeCondicao(mag)
    }, [valor, mag])

    const atualizaMag = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                <span className="text-md text-black font-bold flex items-center">
                    <Target className="mr-2 h-4 w-4 text-black" />
                    Alertar quando o valor
                </span>
                <div className="border-b-2 border-gray-100 mt-4">
                    <div className="bg-gray-100 p-6 rounded-3xl flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-center text-black text-md">
                            <div className="flex items-center gap-4">
                                <span>For</span>
                                <span className="font-bold text-lg">
                                    <select
                                        value={mag}
                                        onChange={atualizaMag}
                                        className="text-md text-center p-1"
                                    >
                                        {metas.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.nome}
                                            </option>
                                        ))}
                                    </select>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
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
                        </div>
                        <input
                            className="w-full max-w-xs py-2 bg-transparent focus:bg-gray-50 text-black cursor-pointer"
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
