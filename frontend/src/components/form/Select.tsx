import { ReactNode } from "react"

interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    onChange?: (novoValor: any) => void
    children: ReactNode
}

export default function Select(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label className="text-gray-400 font-normal tracking-wider">
                <span>{props.label}</span>

                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    {/* {props.icone && (
                        <FontAwesomeIcon 
                            icon={props.icone} 
                            className="text-xl"  // Utilizando classe utilitária do Tailwind CSS
                        />
                    )} */}

                    <select
                        className="flex-grow py-2 text-black bg-transparent focus:bg-gray-50"
                        value={props.valor}
                        onChange={e => props.onChange?.(e.target.value)}
                        required={props.obrigatorio}
                    >
                        {props.children}
                    </select>
                </div>
            </label>
        </div>
    )
}
