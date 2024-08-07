"use client";

import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Usuario from '@/model/Usuario';
import firebase from '@/lib/firebase/config'; 
import cookies from 'js-cookie';

interface AuthContextProps {
    usuario: Usuario;
    loginGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

const defaultUsuario: Usuario = {
    uid: '',
    email: '',
    nome: '',
    token: '',
    provedor: '',
    imagemUrl: ''
};

const defaultAuthContext: AuthContextProps = {
    usuario: defaultUsuario,
    loginGoogle: async () => {},
    logout: async () => {}
};

const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
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

function gerenciarCookie(logado: boolean) {
    if (logado) {
        cookies.set('admin-foco-juridico-auth', logado.toString(), {
            expires: 7
        });
    } else {
        cookies.remove('admin-foco-juridico-auth');
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<Usuario>(defaultUsuario);
    const [carregando, setCarregando] = useState<boolean>(true);
    const router = useRouter();

    async function configurarSessao(usuarioFirebase: firebase.User | null) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase);
            setUsuario(usuario);
            gerenciarCookie(true);
            setCarregando(false);
            return usuario.email;
        } else {
            setUsuario(defaultUsuario);
            gerenciarCookie(false);
            setCarregando(false);
            return false;
        }
    }

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
        if (resp.user) {
            await configurarSessao(resp.user);
            router.push('/admin');
        }
    }

    async function logout() {
        await firebase.auth().signOut();
        await configurarSessao(null);
        router.push('/login');
    }

    useEffect(() => {
        const cancelarObserver = firebase.auth().onIdTokenChanged(configurarSessao);
        return () => cancelarObserver();
    }, []);

    if (carregando) {
        return <div>Carregando...</div>;
    }

    return (
        <AuthContext.Provider value={{ usuario, loginGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
