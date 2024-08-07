"use client";

import { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Logo from '../templete/Logo';
import Botao from '../form/Botao';
import Formulario from '../form/Formulario';
import AuthInput from '../form/Input';
import LinkInformativo from './LinkInformativo';
//import { cookies } from 'next/headers';
//import { SESSION_COOKIE_NAME } from './../../lib/constants'; // added

import { useUserSession } from '../../data/hook/use-user-session';
import { signInWithGoogle, signOutWithGoogle } from '../../lib/firebase/auth';
import { createSession, removeSession } from '../../actions/auth-actions';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Pega o cookie com o usuário logado
    //const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;

    //const userSessionId = useUserSession(session);
    // serve para pegar o id do usuário logado, se tiver

    const handleSignIn = async () => {
        const userUid = await signInWithGoogle();
        if (userUid) {
            await createSession(userUid);
        }
    };

    const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeSession();
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
{process.env.NEXT_PUBLIC_API_KEY}
        </div>
    );
}
