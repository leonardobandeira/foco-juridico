import { IconeAjustes, IconeCasa, IconeNotificacoes } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
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