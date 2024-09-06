"use client";

import { createContext, ReactNode, useState } from "react";
import { Auth, Tema } from "./types";
import Usuario from "@/model/Usuario";

interface AppContextProps {
    tema: Tema;
    alternarTema: () => void;
    authPage: Auth;
    setAuthPage: (value: Auth) => void;
    usuario: Usuario,
    setUsuario: (value: Usuario) => void;
}

const defaultUsuario: Usuario = {
    uid: '',
    email: '',
    nome: '',
    token: '',
    provedor: '',
    picture: ''
};

const defaultContext: AppContextProps = {
    tema: '',
    alternarTema: () => { },
    authPage: 'login',
    setAuthPage: () => { },
    usuario: defaultUsuario,
    setUsuario: () => { },
};

const AppContext = createContext<AppContextProps>(defaultContext);

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [authPage, setAuthPage] = useState<Auth>('login');
    const [tema, setTema] = useState<Tema>('');
    const [usuario, setUsuario] = useState<Usuario>(defaultUsuario);

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '');
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema,
            authPage,
            setAuthPage,
            usuario,
            setUsuario
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
