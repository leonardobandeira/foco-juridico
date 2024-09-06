import Image from "next/image";
import foto from './../../../assets/persona1.jpg';
import useAppData from "@/data/hook/useAppData";

export default function Foto({ classes = '' }) {
    const { usuario } = useAppData();

    const imageUrl = usuario.uid ? usuario.picture : foto;
    return (
        <div className={`relative ${classes}`} style={{ width: '100%', height: '100%' }}>
            {typeof imageUrl === 'string' ? (
                <Image src={imageUrl} alt="Imagem do perfil" layout="fill" className={classes} />
            ) : (
                <Image src={foto} alt="Imagem do perfil" layout="fill" className={classes} />
            )}
        </div>
    )
}
