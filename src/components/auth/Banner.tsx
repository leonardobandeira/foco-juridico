import Image from "next/image";
import banner from '../../assets/banner/banner.svg';

export default function Banner() {
    return (
        <Image
            src={banner}
            alt="Foco Jurídico - uma nova forma de monitorar"
        ></Image>
    )
}