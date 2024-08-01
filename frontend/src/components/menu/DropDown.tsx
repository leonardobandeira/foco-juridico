import { useState, ReactNode } from 'react';

interface DropDownProps {
    children: ReactNode;
}

export default function DropDown({ children }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="relative cursor-pointer">
            <div className={`flex items-center  bg-white border border-gray-300 
                focus:border-blue-500 rounded px-3 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none shadow}`}
                onClick={toggleDropdown}
            >
                Botão aquiBotão aquiBotão aquiBotão aquiBotão aqui
            </div>

            {isOpen && (
                <div
                    className="absolute bg-white border border-gray-200 py-1 shadow-md rounded w-[200px] max-w-full overflow-hidden mt-2 right-0"
                >
                    {children}
                </div>
            )}
        </div>
    );
}
