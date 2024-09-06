"use client";
import { useState } from "react";
import LinkInformativo from "./LinkInformativo";
import TituloFormulario from "@/components/form/TituloFormulario";
import { User, Mail, Phone, Lock, } from "lucide-react"
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Logo from "@/components/Logo";
import useAppData from "@/data/hook/useAppData";
import Input from "@/components/form/Input";

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
                <Formulario onSubmit={() => {console.log('teste')}}>
                    <TituloFormulario titulo="Registrar-se" />
                    <Input
                        label="Nome completo"
                        tipo="email"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        obrigatorio
                        icone={User}
                    />
                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        obrigatorio
                        icone={Mail}
                    />
                    <Input
                        label="Número de telefone"
                        tipo="email"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        obrigatorio
                        icone={Phone}
                    />
                    <Input
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        obrigatorio
                        icone={Lock}
                    />
                    <Input
                        label="Confirme a senha"
                        tipo="password"
                        valor={senha}
                        onChange={(e) => setSenha(e.target.value)}
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
