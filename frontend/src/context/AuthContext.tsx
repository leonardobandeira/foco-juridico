"use client"; // Garante que o código seja executado no lado do cliente

import { createContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Usuario from '@/model/Usuario';

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
    loginGoogle: async () => {}
};

const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<Usuario>(defaultUsuario);
    const router = useRouter();

    async function loginGoogle() {
        try {
            console.log("Login com o Google");
            // Implementar lógica de autenticação com o Google
            // Atualize o estado do usuário conforme necessário
            router.push('/admin');
        } catch (error) {
            console.error('Erro ao fazer login com Google:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ usuario, loginGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
