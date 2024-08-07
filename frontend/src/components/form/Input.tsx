import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface AuthInputProps {
    label?: string
    valor: any
    tipo?: 'text' | 'email' | 'password' | 'number'
    obrigatorio?: boolean
    onChange?: (novoValor: any) => void
    icone?: IconDefinition
    class?: string
}

export default function Input(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label className="text-gray-400 font-normal tracking-wider">
                <span>{props.label}</span>

                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    {/* {props.icone && (
                        <FontAwesomeIcon 
                            icon={props.icone} 
                            className="text-xl" 
                        />
                    )} */}

                    <input
                        className={`flex-grow py-2 bg-transparent focus:bg-gray-50 text-black ${props.class}`}
                        type={props.tipo ?? 'text'}
                        value={props.valor}
                        onChange={e => props.onChange?.(e.target.value)}
                        required={props.obrigatorio}
                    />
                </div>
            </label>
        </div>
    )
}
