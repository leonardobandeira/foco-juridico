import Logo from "../Logo";
import CartaoPessoal from "./CartaoPessoal";
import ItemMenu from "./ItemMenu";
import { AlertCircle, User, Copyright, LogOut, Settings } from "lucide-react"

interface MenuTopoProps {

}
export default function MenuTopo(props: MenuTopoProps) {
    return (
        <div className={`w-full flex flex-row justify-between items-center mb-4 bg-gray-100 p-4`}>
            <Logo classes={`w-[120px]`} />
            <CartaoPessoal>
                <span className={`flex items-center text-black font-semibold justify-center p-1.5 text-lg bg-gray-50 border-b border-base2`}>
                    <Settings className="mr-2 h-5 w-5" />Minha Conta
                </span>
                <ItemMenu path="/">
                    <AlertCircle className="mr-2 h-4 w-4" />Criar Alerta
                </ItemMenu>
                <ItemMenu path="/">
                    <User className="mr-2 h-4 w-4" />Meus dados
                </ItemMenu>
                <ItemMenu path="admin/sobre">
                    <Copyright className="mr-2 h-4 w-4" />Sobre nós
                </ItemMenu>
                <ItemMenu path="/" style="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />Sair
                </ItemMenu>
            </CartaoPessoal>
        </div>
    )
}