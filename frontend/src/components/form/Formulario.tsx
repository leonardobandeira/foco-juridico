export default function Formulario(props) {
    return (
        <form className={`mb-6`}>
            {props.children}
        </form>
    )
}