import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ItemLista() {
    return (
        <div className="my-2 p-2 flex items-center">
            <FontAwesomeIcon icon={faCircleArrowUp} className="text-base1 text-5xl" />
            <div className="flex flex-col ml-4">
                <strong className="text-black">Alerta 1</strong>
                <span className="text-gray-400">Painel de tempo de movimentação</span>
            </div>

            <div className="flex flex-grow justify-end">
                <strong className="text-black">4.545</strong>
            </div>
        </div>
    );
}
