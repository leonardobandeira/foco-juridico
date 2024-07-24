import { useState } from "react";
import Formulario from "../form/Formulario";
import AuthInput from "../form/Input";
import Botao from "../form/Botao";
import Logo from "../templete/Logo";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import LinkInformativo from "./LinkInformativo";
import useAppData from "../../data/hook/useAppData";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario titulo="Entrar">
                    <AuthInput
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={faEnvelope}
                    />
                    <AuthInput
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        obrigatorio
                        icone={faLock}
                    />
                    <Botao
                        texto="Entrar"
                        className={`mt-8 w-full`}
                        tipo="primario"
                        onClick={() => { console.log('Teste de entrar na app'); }}
                    />
                    {/* <Botao
                        texto="Voltar"
                        tipo="outline"
                        onClick={() => { setAuthPage('solicitar') }}
                    /> */}
                </Formulario>
            </div>

            <LinkInformativo
                texto="É novo aqui?"
                texto2="Registre-se"
                rota="registrar"
            />
        </div>
    );
}
