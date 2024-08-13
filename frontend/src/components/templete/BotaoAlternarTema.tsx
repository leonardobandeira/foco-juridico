import { IconeLua, IconeSol } from "../../app/shared/icons"

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div
            onClick={props.alternarTema}
            className={`hidden sm:flex items-center cursor-pointer
            bg-gradient-to-t from-yellow-500 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full`}
        >
            <div className={`flex items-center justify-center
            bg-sky-50 text-yellow-600 w-6 h-6 rounded-full`}>
                {IconeSol(4)}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-sky-50`}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div
            onClick={props.alternarTema}
            className={`hidden sm:flex justify-end cursor-pointer
            bg-gradient-to-t from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full`}
        >
            <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`flex items-center justify-center
            bg-black text-yellow-300 w-6 h-6 rounded-full`}>
                {IconeLua(4)}
            </div>
        </div>
    )
}