interface AuthInputProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'password'
    obrigatorio: boolean
    onChange: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.tipo ?? 'text'} value={props.valor}
                onChange={e => props.onChange?.(e.target.value)}
                required={props.obrigatorio}
            />
        </div>
    )
}