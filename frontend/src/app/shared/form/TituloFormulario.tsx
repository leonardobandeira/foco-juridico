export default function TituloFormulario({ titulo = '' }) {
    return (
        <h1 className="font-semibold text-2xl text-base1 md:text-3xl tracking-wider pb-9 w-[335px]" >
            {titulo}
        </h1>
    )
}