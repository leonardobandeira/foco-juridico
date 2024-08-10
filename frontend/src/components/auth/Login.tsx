"use client";

import { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Logo from '../templete/Logo';
import Botao from '../form/Botao';
import Formulario from '../form/Formulario';
import AuthInput from '../form/Input';
import LinkInformativo from './LinkInformativo';
import { useUserSession } from '../../data/hook/use-user-session';
import { signInWithGoogle, signOutWithGoogle } from '../../lib/firebase/auth';
import { createCookie, removeCookie } from '../../actions/cookies';
import { type User } from 'firebase/auth';
import Usuario from "@/model/Usuario";
import useAppData from "@/data/hook/useAppData";

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

    const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeCookie();
    };

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
                        onClick={() => { }}
                    />


                    <Botao
                        texto="Entrar com o Gmail"
                        className={`mt-8 w-full`}
                        tipo="secundario"
                        onClick={() => { }}
                    />
                </Formulario>

                <LinkInformativo
                    texto="É novo aqui?"
                    texto2="Registre-se"
                    rota="registrar"
                />
            </div>
            <button onClick={handleSignIn} >Entrar</button>
        </div>
    );
}
