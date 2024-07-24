import { IconeAjustes, IconeCasa, IconeLogout, IconeNotificacoes } from "../../icons";
import Logo from "../Logo";
import MenuItem from "./MenuLateralItem";

export default function MenuLateral() {
    const isVisible = true
    return (<aside className={`md:hidden ${isVisible ? 'flex flex-col items-center justify-center' : 'hidden'} dark:bg-gray-900 dark:text-gray-200`}>
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
            <MenuItem
                onClick={() => { console.log("Sair!") }}
                texto="Sair"
                icone={IconeLogout}
                className="text-red-600 hover:bg-red-400 hover:text-sky-50
                    dark:text-red-600 dark:hover:text-sky-50" />
        </ul>
    </aside>
    )
}