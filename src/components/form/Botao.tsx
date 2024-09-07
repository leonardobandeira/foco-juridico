import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface BotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario' | 'outline' | 'voltar';
    icone?: LucideIcon;
    onClick?: () => void;
    className?: string;
}

export default function Botao({
    texto = '',
    tipo = 'primario',
    icone: Icon,
    onClick,
    className,
}: BotaoProps) {
    const tipoClasses = {
        primario: 'bg-base1 hover:bg-blue-500 text-white mt-6',
        secundario: 'bg-base2 hover:bg-gray-500 text-white mt-6',
        outline: 'hover:bg-gray-200 text-base1 border border-solid border-base1',
        voltar: 'text-left rounded-full'
    };

    return (
        (<button
            onClick={onClick}
            className={clsx(
                'rounded-xl font-semibold button w-[335px] px-4 py-2 flex flex-row justify-center items-center',
                tipoClasses[tipo],
                className
            )}
        >
            {tipo !== 'voltar' && texto}
            {Icon && <Icon className={`ml-2 h-4 w-4 ${tipo === 'outline' ? 'text-base1' : 'text-white'}`} />}
        </button>)
    );
}
