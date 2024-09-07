import Logo from "../../../components/Logo";
import CartaoPessoal from "./CartaoPessoal";
import ItemMenu from "./ItemMenu";
import { AlertCircle, User, Copyright, LogOut, Settings } from "lucide-react"
import { signOutWithGoogle } from "@/lib/firebase/auth";
import useAppData from "@/data/hook/useAppData";
import Usuario from "@/model/Usuario";

interface MenuTopoProps {
}

export default function MenuTopo(props: MenuTopoProps) {
    const { setUsuario } = useAppData();
    const defaultUsuario: Usuario = {
        uid: '',
        email: '',
        nome: '',
        token: '',
        provedor: '',
        picture: ''
    };

    const handleSignOut = async () => {
        await signOutWithGoogle();
        setUsuario(defaultUsuario)
    };

    return (
        <div className={`w-full flex flex-row justify-between items-center mb-4 bg-gray-100 p-4`}>
            <Logo classes={`w-[120px]`} />
            <CartaoPessoal>
                <span className={`flex items-center text-black font-semibold justify-center p-1.5 text-lg bg-gray-50 border-b border-base2`}>
                    <Settings className="mr-2 h-5 w-5" />Minha Conta
                </span>
                <ItemMenu path="alerta">
                    <AlertCircle className="mr-2 h-4 w-4" />Criar Alerta
                </ItemMenu>
                <ItemMenu path="gerenciar-paineis">
                    <AlertCircle className="mr-2 h-4 w-4" />Gerenciar Paíneis
                </ItemMenu>
                <ItemMenu path="meus-dados">
                    <User className="mr-2 h-4 w-4" />Meus dados
                </ItemMenu>
                <ItemMenu path="sobre">
                    <Copyright className="mr-2 h-4 w-4" />Sobre nós
                </ItemMenu>
                <a onClick={handleSignOut}>
                    <ItemMenu path="/" style="text-red-500">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                    </ItemMenu></a>
            </CartaoPessoal>
        </div>
    )
}