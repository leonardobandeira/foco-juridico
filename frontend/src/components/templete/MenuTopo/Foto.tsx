import Image from "next/image";
import foto from './../../../assets/persona1.jpg'

export default function Foto({ classes }) {
    return (
        <Image src={foto} alt="Imagem do perfil" className={classes} />
    )
}