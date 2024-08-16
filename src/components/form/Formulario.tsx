import { ReactNode } from "react";

interface FormularioProps {
    className?: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}

export default function Formulario({ className, onSubmit, children }: FormularioProps) {
    return (
        <form className="my-6" onSubmit={onSubmit}>
            <div className={`${className}`}>
                {children}
            </div>
        </form >
    );
}
