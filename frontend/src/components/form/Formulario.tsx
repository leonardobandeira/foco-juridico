export default function Formulario(props) {
    return (
        <form className={`mb-6`}>
            <h1 className={`font-bold text-4xl md:text-3xl mb-6 tracking-wider text-left w-full`}>
                {props.titulo}
            </h1>
            {props.children}
        </form>
    )
}