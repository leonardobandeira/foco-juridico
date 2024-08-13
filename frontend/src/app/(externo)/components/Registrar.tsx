"use client";
import { useState } from "react";
import Formulario from "../../../components/form/Formulario";
import Input from "../../../components/form/Input";
import Botao from "../../../components/form/Botao";
import Logo from "../../shared/Logo";
import LinkInformativo from "./LinkInformativo";
import useAppData from "../../../data/hook/useAppData";
import TituloFormulario from "@/components/form/TituloFormulario";
import { User, Mail, Phone, Lock, } from "lucide-react"

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
                <Formulario>
                    <TituloFormulario titulo="Registrar-se" />
                    <Input
                        label="Nome completo"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={User}
                    />
                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={Mail}
                    />
                    <Input
                        label="Número de telefone"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={Phone}
                    />
                    <Input
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        obrigatorio
                        icone={Lock}
                    />
                    <Input
                        label="Confirme a senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        obrigatorio
                        icone={Lock}
                    />
                    <Botao
                        texto="Registrar-se"
                        className={`mt-8 w-full`}
                        tipo="primario"
                        onClick={() => { console.log('Teste de entrar na app via cadastro'); }}
                    />
                </Formulario>
            </div>

            <LinkInformativo texto="Já tenho um cadastro." texto2="Entrar" rota="login" />
        </div>
    );
}
