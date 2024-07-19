import ItemLista from "./ItemLista";

export default function AlertasAtivos() {
    return (
        <div className="flex flex-col mr-16">
            <div>
                <h1 className="text-black font-semibold text-left text-3xl">Alertas ativos</h1>
            </div>
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
        </div>
    )
}