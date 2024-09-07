import Image from "next/image";
import foto from './../../../assets/persona1.jpg';
import useAppData from "@/data/hook/useAppData";

interface FotoProps {
    classes?: string
}

export default function Foto({ classes = '' }: FotoProps) {
    const { usuario } = useAppData();

    const imageUrl = usuario?.picture || foto;

    return (
        <div className={`relative ${classes}`} style={{ width: '100%', height: '100%' }}>
            <Image
                src={imageUrl}
                alt="Imagem do perfil"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}
