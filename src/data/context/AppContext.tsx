"use client";

import { createContext, ReactNode, useState } from "react";
import { Auth, Tema } from "./types";
import Usuario from "@/model/Usuario";
import Cookies from "js-cookie";
import { SESSION_COOKIE_NAME } from "@/lib/constants";

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

function gerenciarCookies(logado: boolean) {
    if (logado) {
        Cookies.set(SESSION_COOKIE_NAME, logado + '', {
            expires: 7
        })
    } else {
        Cookies.remove(SESSION_COOKIE_NAME)
    }
}

export function AppProvider({ children }: AppProviderProps) {
    const [authPage, setAuthPage] = useState<Auth>('login');
    const [tema, setTema] = useState<Tema>('');
    const [usuario, setUsuario] = useState<Usuario>(defaultUsuario);

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '');
    }

    function configurarSessao(){
        // para configurar os cookies
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
