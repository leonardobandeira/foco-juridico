import React from 'react';

interface BotaoProps {
    texto: string;
    tipo?: 'primario' | 'secundario';
    onClick: () => void;
    className?: string;
}

export default function Botao({ texto, tipo = 'primario', onClick, className }: BotaoProps) {
    const defaultClasses = 'w-full rounded-lg px-4 py-3 mt-6';
    const tipoClasses = tipo === 'primario'
        ? 'bg-base1 hover:bg-blue-500 text-white'
        : 'bg-gray-900 hover:bg-gray-500 text-black';

    return (
        <button onClick={onClick} className={`${defaultClasses} ${tipoClasses} ${className}`}>
            {texto}
        </button>
    );
}
