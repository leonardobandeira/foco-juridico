import Image from "next/image";
import banner from '../../assets/banner/banner.svg';

interface LinkInformativo {
    texto: string
    texto2: string
    rota: string
}

export default function LinkInformativo(props: LinkInformativo) {
    return (
        <label className="text-gray-400 font-normal tracking-wider text-center">
            {props.texto} <span className="text-base1 font-bold">{props.texto2}</span>
        </label>
    )
}