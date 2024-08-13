import { LucideIcon } from "lucide-react"

interface AuthInputProps {
    label: string
    valor: any
    tipo: 'text' | 'email' | 'password' | 'number'
    obrigatorio: boolean
    onChange: (novoValor: any) => void
    icone: LucideIcon
    className?: string
}

export default function Input(props: AuthInputProps) {
    const { label, valor, tipo, obrigatorio, onChange, icone: Icon, className } = props;

    return (
        <div className="flex flex-col mt-4 w-[335px]">
            <label className="text-gray-400 font-normal tracking-wider">
                <span>{label}</span>
                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    {Icon && <Icon className="mr-2 h-4 w-4 text-gray-500" />}
                    <input
                        className={`flex-grow py-2 bg-transparent focus:bg-gray-50 text-black ${className}`}
                        type={tipo ?? 'text'}
                        value={valor}
                        onChange={e => onChange?.(e.target.value)}
                        required={obrigatorio}
                    />
                </div>
            </label>
        </div>
    );
}
