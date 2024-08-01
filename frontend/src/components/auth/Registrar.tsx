"use client";
import { useState } from "react";
import Formulario from "../form/Formulario";
import AuthInput from "../form/Input";
import Botao from "../form/Botao";
import Logo from "../templete/Logo";
import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import LinkInformativo from "./LinkInformativo";
import useAppData from "../../data/hook/useAppData";

export default function Registrar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setAuthPage } = useAppData();

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario titulo="Registrar-se">
                    <AuthInput
                        label="Nome completo"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={faUser}
                    />
                    <AuthInput
                        label="Número de telefone"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={faPhone}
                    />
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
                    <AuthInput
                        label="Confirme a senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        obrigatorio
                        icone={faLock}
                    />
                    <Botao
                        texto="Registrar-se"
                        className={`mt-8 w-full`}
                        tipo="primario"
                        onClick={() => { console.log('Teste de entrar na app via cadastro'); }}
                    />
                    {/* <Botao
                        texto="Voltar"
                        tipo="outline"
                        onClick={() => { setAuthPage('login'); }}
                    /> */}
                </Formulario>
            </div>

            <LinkInformativo texto="Já tenho um cadastro." texto2="Entrar" rota="login" />
        </div>
    );
}
