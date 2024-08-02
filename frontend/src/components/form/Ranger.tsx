import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface AuthInputProps {
    label: string
    subtexto: string
    valor: any
    obrigatorio?: boolean
    onChange?: (novoValor: any) => void
    icone?: IconDefinition
}

export default function Ranger(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label className="text-gray-400 font-normal tracking-wider">
                <span className="text-lg text-black font-bold mb-4">{props.label}</span>

                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    {/* {props.icone && (
                        <FontAwesomeIcon 
                            icon={props.icone} 
                            className="text-xl"  // Utilizando classe utilitária do Tailwind CSS
                        />
                    )} */}

                    <div className="bg-gray-100 mt-4 h-auto flex flex-col items-left gap-2 justify-center p-6 rounded-3xl flex-grow">
                        <span className="text-bold text-black">Verificar a cada <span className="text-base1 font-bold text-lg">72</span> horas</span>
                        <input
                            className="w-[100%] self-center py-2 bg-transparent focus:bg-gray-50 text-black cursor-pointer"
                            type="range" min="1" step={5} max="100"
                            onChange={e => props.onChange?.(e.target.value)}
                            required={props.obrigatorio}
                        />
                        <span className="text-bold text-black">Aproximadamente <span className="font-bold">3</span> dias</span>
                    </div>
                </div>
            </label>
        </div>
    )
}
