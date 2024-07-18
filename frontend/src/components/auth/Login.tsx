import { useState } from "react"
import Formulario from "../form/Formulario"
import AuthInput from "../form/Input"
import Botao from "../form/Botao"
import Logo from "../templete/Logo"

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className={`md:w-2/3 w-full flex flex-col justify-center`}>
            <Formulario>
                <div className={`md:hidden mb-6 flex flex-row justify-center`}><Logo /></div>
                <h1 className={`font-bold md:text-4xl text-3xl mb-10 subpixel-antialiased tracking-wide`}>{`Entrar`}</h1>

                <AuthInput
                    label="Endereço de Email"
                    tipo="email"
                    valor={email}
                    onChange={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    onChange={setSenha}
                    obrigatorio
                />

                <Botao texto="Entrar" className={`mt-10`} tipo="primario" onClick={() => { console.log('Teste') }} />
            </Formulario>
            <label className={`text-gray-400 font-normal tracking-wider text-center`}>
                É novo aqui? <span className={`text-base1 font-bold`}>Registre-se</span>
            </label>
        </div>
    );
}