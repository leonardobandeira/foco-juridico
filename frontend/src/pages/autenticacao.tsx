import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput
                label="Email"
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
        </div>
    )
}