interface AuthInputProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'password'
    obrigatorio: boolean
    onChange: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`flex flex-col mt-4`}>
            <label className={`text-gray-400 font-semibold tracking-wider`}>{props.label}</label>
            <input
                className={`py-2 
                border-b-2 border-gray-200 
                focus:outline-none focus:border-gray-700 
                bg-transparent focus:bg-gray-50 `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.onChange?.(e.target.value)}
                required={props.obrigatorio}
            />
        </div>
    )
}