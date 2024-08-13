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
        <label
            className="text-gray-400 font-normal tracking-wider text-center ">
            {props.texto}
            <span className="text-base1 font-bold hover:underline cursor-pointer ml-2"
                onClick={() => { setAuthPage(props.rota) }}>{props.texto2}
            </span>
        </label>
    )
}