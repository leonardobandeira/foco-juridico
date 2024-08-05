"use client";

import { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Logo from '../templete/Logo';
import Botao from '../form/Botao';
import Formulario from '../form/Formulario';
import AuthInput from '../form/Input';
import LinkInformativo from './LinkInformativo';
import useAuthData from "@/data/hook/useAuthData";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { usuario, loginGoogle } = useAuthData();

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
                        icone={faEnvelope}
                    />
                    <AuthInput
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        icone={faLock}
                    />
                    <Botao
                        texto="Entrar"
                        className={`mt-8 w-full`}
                        tipo="primario"
                        onClick={() => { console.log('Teste de entrar na app'); }}
                    />
                  
                    <Botao
                        texto="Entrar com o Gmail"
                        className={`mt-8 w-full`}
                        tipo="secundario"
                        onClick={loginGoogle}
                    />
                </Formulario> 
                
                <LinkInformativo
                    texto="É novo aqui?"
                    texto2="Registre-se"
                    rota="registrar"
                />
            </div>
        </div>
    );
}
