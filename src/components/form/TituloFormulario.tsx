export default function TituloFormulario({ titulo = '', className = '' }) {
    return (
        (<h1 className={`flex flex-col justify-center font-semibold text-2xl text-base1 md:text-3xl tracking-wider w-[335px] ${className}`} >
            {titulo}
        </h1>)
    );
}