interface BotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario' | 'outline' | 'voltar';
    onClick: () => void;
    className?: string;
}

export default function Botao({ texto, tipo = 'primario', onClick, className }: BotaoProps) {
    const defaultClasses = `rounded-xl font-semibold button`;
    let tipoClasses = ''

    if (tipo === 'primario') {
        tipoClasses = 'w-full  bg-base1 hover:bg-blue-500 text-white px-4 py-3 mt-6 '
    }
    if (tipo === 'secundario') {
        tipoClasses = 'w-full bg-base2 hover:bg-gray-500 text-white px-4 py-3 mt-6 '
    }
    if (tipo === 'outline') {
        tipoClasses = 'w-full md:hidden hover:bg-gray-200 text-base1 px-4 py-3'
    }
    if (tipo === 'voltar') {
        tipoClasses = 'text-left rounded-full'
    }

    return (
        <button onClick={onClick} className={`${defaultClasses} ${tipoClasses} ${className}`}>
            {tipo === 'voltar'}
            {tipo !== 'voltar' && texto}
        </button>
    );
}
