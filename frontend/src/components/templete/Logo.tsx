import Image from "next/image";
import logo from '../../assets/logo/logo.svg';
import logo_dark from '../../assets/logo/logo-dark.svg';
import useAppData from "../../data/hook/useAppData";

export default function Logo() {
    const { tema } = useAppData()
    return (
        <div className={`
            h-30 w-30
        `}>
            <Image src={!tema ? logo : logo_dark} alt="Logo"></Image>
        </div>
    )
}