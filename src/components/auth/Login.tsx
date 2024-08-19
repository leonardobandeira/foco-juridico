"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react"
import LinkInformativo from './LinkInformativo';
import Link from 'next/link'
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import TituloFormulario from "@/components/form/TituloFormulario";
import Logo from "@/components/Logo";
import Input from "@/components/form/Input";
import { type User } from 'firebase/auth';
import Usuario from "@/model/Usuario";
import useAppData from "@/data/hook/useAppData";
import { createCookie } from "@/actions/cookies";
import { signInWithGoogle } from "@/lib/firebase/auth";

async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName || '',
        email: usuarioFirebase.email || '',
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId || '',
        imagemUrl: usuarioFirebase.photoURL || ''
    };
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setUsuario } = useAppData();
    const handleProximoClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleSignIn = async () => {
        const user = await signInWithGoogle();
        const userUid = user?.uid;

        if (user) {
            const usuario = await usuarioNormalizado(user);
            setUsuario(usuario);
            if (userUid) {
                await createCookie(userUid);
            }
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario className="flex flex-col items-center" onSubmit={handleProximoClick}>
                    <TituloFormulario titulo="Entrar" />

                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icone={Mail}
                        obrigatorio={false}
                    />
                    <Input
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={(e) => setSenha(e.target.value)}
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
                        onClick={handleSignIn}
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
