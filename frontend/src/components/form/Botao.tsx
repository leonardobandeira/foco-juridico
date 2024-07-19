import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface BotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario' | 'voltar';
    onClick: () => void;
    className?: string;
}

export default function Botao({ texto, tipo = 'primario', onClick, className }: BotaoProps) {
    const defaultClasses = `w-full rounded-xl font-semibold`;
    let tipoClasses = ''

    if (tipo === 'primario') {
        tipoClasses = 'bg-base1 hover:bg-blue-500 text-white px-4 py-3 mt-6 '
    }
    if (tipo === 'secundario') {
        tipoClasses = 'bg-base2 hover:bg-gray-500 text-white px-4 py-3 mt-6 '
    }
    if (tipo === 'voltar') {
        tipoClasses = 'text-left rounded-full'
    }

    return (
        <button onClick={onClick} className={`${defaultClasses} ${tipoClasses} ${className}`}>
            {tipo === 'voltar' && <FontAwesomeIcon className="md:text-5xl text-3xl ml-4 text-base2" icon={faCircleArrowLeft} />}
            {tipo !== 'voltar' && texto}
        </button>
    );
}
