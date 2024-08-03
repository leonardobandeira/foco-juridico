import { useState, useEffect } from "react";
import { } from "lucide-react"
import Input from "./Input";

type Maguinitude = '<' | '<=' | '=' | '>' | '>='

interface AuthInputProps {
}

export default function RangeAtingir(props: AuthInputProps) {
    const [mag, setMag] = useState<Maguinitude>('<');
    const [valor, setValor] = useState<number>(45666);

    const parametro: Maguinitude[] = ['<', '<=', '=', '>', '>='];

    const atualizaMag = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const novoValor = event.target.value as Maguinitude
        setMag(novoValor);
    };

    const handlerValor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValor(Number(event.target.value));
    };


    return (
        <div className="flex flex-col mt-6">
            <label className="text-gray-400 font-normal tracking-wider">
                <span className="text-2xl text-black font-bold">Alertar quando atingir o valor</span>
                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    <div className="bg-gray-100 mt-4 h-auto flex flex-col items-left gap-2 justify-center p-6 rounded-3xl flex-grow">
                        <div className="flex flex-row  gap-4 items-center text-bold text-black text-2xl ">
                            <span>Valor for</span>
                            <span className="text-base1 font-bold text-lg">
                                <select value={mag} onChange={atualizaMag} className="text-2xl">
                                    {parametro.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </span>
                            <span>a</span>
                            <input
                            className="w-24"
                                type="number"
                                value={valor}
                            />
                        </div>
                        <input
                            className="w-[100%] self-center py-2 bg-transparent focus:bg-gray-50 text-black cursor-pointer"
                            type="range"
                            min="0"
                            step={10}
                            max="10000"
                            required={true}
                        />
                    </div>
                </div>
            </label>
        </div>
    );
}
