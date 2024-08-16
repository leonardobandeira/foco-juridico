import Image from "next/image";
import banner from '../assets/banner/banner.svg';
import Marketing from "./Marketing";

export default function Banner() {
    return (
        <section className="flex flex-col gap-24">
            <Image
                src={banner}
                alt="Foco Jurídico - uma nova forma de monitorar"
            ></Image>

            <Marketing />
        </section>
    )
}