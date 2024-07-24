import { createContext, useState, ReactNode } from "react";

type Auth = '' | 'login' | 'registrar' | 'solicitar';
type Tema = 'dark' | '';

interface AppContextProps {
    tema: Tema;
    alternarTema: () => void;
    authPage: Auth;
    setAuthPage: (value: Auth) => void;
}

const AppContext = createContext<AppContextProps>({
    tema: '',
    alternarTema: () => {},
    authPage: '',
    setAuthPage: () => {}
});

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [authPage, setAuthPage] = useState<Auth>('');
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
