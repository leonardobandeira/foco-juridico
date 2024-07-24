import Botao from "./Botao";

export default function Formulario(props) {
    return (
        <form className={`my-6`}>
            <h1 className={`flex items-center font-bold text-2xl text-base1 md:text-3xl tracking-wider`}>
                <Botao
                    tipo="voltar"
                    className={`${props.back || false ? 'block' : 'hidden'} mr-3`}
                    onClick={() => { console.log('Teste'); }}
                />
                <span>{props.titulo}</span>
            </h1>

            {props.children}
        </form>
    )
}