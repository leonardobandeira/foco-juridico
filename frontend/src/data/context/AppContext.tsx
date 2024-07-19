import { createContext, useState } from "react";

type Auth = '' | 'login' | 'cadastro' | 'solicitar'
type Tema = 'dark' | ''

interface AppContextProps {
    tema: Tema
    alternarTema: () => void
    authPage: Auth
    setAuthPage: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null,
    alternarTema: null,
    authPage: null,
    setAuthPage: null
})

export function AppProvider(props) {
    const [authPage, setAuthPage] = useState<Auth>('')
    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema,
            authPage,
            setAuthPage
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext