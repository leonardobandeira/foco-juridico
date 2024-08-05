"use client"; // Garante que o código seja executado no lado do cliente

import { createContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Usuario from '@/model/Usuario';
import firebase from 'firebase';

interface AuthContextProps {
    usuario: Usuario;
    loginGoogle: () => Promise<void>;
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
    loginGoogle: async () => { }
};

const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

async function usuarioNormalizado(usuarioFirebase: firebase.User) {
    const token = await usuarioFirebase.getIdToken()

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<Usuario>(defaultUsuario);
    const router = useRouter();

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if (resp.user?.email) {
            const usuario = await usuarioNormalizado(resp.user)
            setUsuario(usuario)
            router.push('/admin')
        }
    }

    return (
        <AuthContext.Provider value={{ usuario, loginGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
