import useAppData from "../../data/hook/useAppData";
import { Auth, Tema } from '../../context/types'

interface LinkInformativo {
    texto: string
    texto2: string
    rota: Auth
}

export default function LinkInformativo(props: LinkInformativo) {
    const { setAuthPage } = useAppData();

    return (
        <label onClick={() => { setAuthPage(props.rota) }}
            className="text-gray-400 font-normal tracking-wider text-center">
            {props.texto} <span className="text-base1 font-bold">{props.texto2}</span>
        </label>
    )
}