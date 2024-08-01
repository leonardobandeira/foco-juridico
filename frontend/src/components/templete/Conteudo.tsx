interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex flex-col m-8 dark:text-gray-200`}>
            {props.children}
        </div>
    )
}