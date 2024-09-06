import Image from "next/image";
import logo from '../../assets/logo/texto.svg';
import logo_dark from '../../assets/logo/texto_dark.svg';
import useAppData from "../../data/hook/useAppData";

export default function Letter({tamanho = 36, classes = ''}) {
    const { tema } = useAppData()
    return (
        <div className={`
            w-${tamanho} ${classes}
        `}>
            <Image src={!tema ? logo : logo_dark} alt="Logo"></Image>
        </div>
    )
}