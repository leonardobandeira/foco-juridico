import Image from "next/image";
import banner from '../../assets/banner/banner.svg';

export default function Logo() {
    return (
        <Image
            src={banner}
            alt="Foco Jurídico - uma nova forma de monitorar"
        ></Image>
    )
}