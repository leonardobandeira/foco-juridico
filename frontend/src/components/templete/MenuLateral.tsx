import { IconeAjustes, IconeCasa, IconeLogout, IconeNotificacoes } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`flex flex-col`}>
            <div className={`
            h-40 w-40
            flex flex-col
            justify-center
            items-center
            p-2
            `}>
                <Logo />
            </div>

            <ul className={`flex-grow`}>
                <MenuItem url="./" texto="Início" icone={IconeCasa} />
                <MenuItem url="./ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="./notificacoes" texto="Notificações" icone={IconeNotificacoes} />
            </ul>
            <ul className={``}>
                <MenuItem onClick={() => {console.log("Sair!")} } texto="Sair" icone={IconeLogout} className="text-red-600 hover:bg-red-400 hover:text-white"/>
            </ul>
        </aside>
    )
}