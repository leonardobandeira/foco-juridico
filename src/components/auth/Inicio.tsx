import useAppData from "@/data/hook/useAppData";
import Banner from "../Banner";
import Botao from "../form/Botao";
import Formulario from "../form/Formulario";
import Rodape from "../Rodape";

export default function Inicio() {
    const { setAuthPage } = useAppData();

    return (
        <div className="flex flex-col justify-between gap-y-24">
            <Banner />
            <Formulario>
                <Botao
                    texto="Login"
                    className="mt-10"
                    tipo="primario"
                    onClick={() => { setAuthPage('login') }}
                />
                <Botao
                    texto="Solicitar acesso"
                    className="mt-10"
                    tipo="secundario"
                    onClick={() => { setAuthPage('solicitar') }}
                />
            </Formulario>
            <Rodape />
        </div>
    );
}
