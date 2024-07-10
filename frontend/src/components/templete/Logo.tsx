import Image from "next/image";
import logo from '../../assets/logo/logo.svg';

export default function Logo() {
    return (
        <div className={`
            h-30 w-30
        `}>
            <Image src={logo} alt="Logo"></Image>
        </div>
    )
}