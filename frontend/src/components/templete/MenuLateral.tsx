import { IconeAjustes, IconeCasa, IconeNotificacoes } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <div className={`
            h-40 w-40
            flex flex-col
            justify-center
            items-center
            p-2
            `}>
                <Logo />
            </div>

            <ul>
                <MenuItem url="./" texto="Início" icone={IconeCasa} />
            </ul>
            <ul>
                <MenuItem url="./ajustes" texto="Ajustes" icone={IconeAjustes} />
            </ul>
            <ul>
                <MenuItem url="./notificacoes" texto="Notificações" icone={IconeNotificacoes} />
            </ul>
        </aside>
    )
}