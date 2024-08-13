"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Mail, Lock } from "lucide-react"
import LinkInformativo from './LinkInformativo';
import Link from 'next/link'
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import TituloFormulario from "@/components/form/TituloFormulario";
import Logo from "@/components/Logo";
import Input from "@/components/form/Input";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter()

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario className="flex flex-col items-center">
                    <TituloFormulario titulo="Entrar" />

                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        icone={Mail}
                        obrigatorio={false}
                    />
                    <Input
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        icone={Lock}
                        obrigatorio={false}
                    />
                    <Link href="/home">
                        <Botao
                            texto="Entrar"
                            className={`mt-8`}
                            tipo="primario"
                            onClick={() => { }}
                        />
                    </Link>
                    <Botao
                        texto="Entrar com o Gmail"
                        className={`bg-red-500`}
                        tipo="secundario"
                        onClick={() => { console.log('Teste de entrar na app'); }}
                    />

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
