import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface BotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario' | 'outline' | 'voltar';
    icone?: LucideIcon;
    onClick: () => void;
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
        outline: 'md:hidden hover:bg-gray-200 text-base1',
        voltar: 'text-left rounded-full'
    };

    return (
        <button
            onClick={onClick}
            className={clsx(
                'rounded-xl font-semibold button w-[335px] px-4 py-2 flex flex-row justify-center items-center',
                tipoClasses[tipo],
                className
            )}
        >
            {Icon && <Icon className="mr-2 h-4 w-4 text-white" />}
            {tipo !== 'voltar' && texto}
        </button>
    );
}
