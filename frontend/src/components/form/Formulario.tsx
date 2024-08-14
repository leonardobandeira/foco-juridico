import { ReactNode } from "react";

interface FormularioProps {
    className?: string;
    children: ReactNode;
}

export default function Formulario({ className, children }: FormularioProps) {
    return (
        <form className="my-6">
            <div className={`${className}`}>
                {children}
            </div>
        </form >
    );
}
