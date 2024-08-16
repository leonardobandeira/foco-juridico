"use client"; 

import { createContext, ReactNode, useState } from "react";
import { Auth, Tema } from "../types";

interface AppContextProps {
    tema: Tema;
    alternarTema: () => void;
    authPage: Auth;
    setAuthPage: (value: Auth) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [authPage, setAuthPage] = useState<Auth>('login');
    const [tema, setTema] = useState<Tema>('');

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '');
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema,
            authPage,
            setAuthPage
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
