import Formulario from "../form/Formulario";
import Botao from "../form/Botao";
import Banner from "./Banner";
import Rodape from "../templete/Rodape";

export default function Inicio() {
    return (
        <div className="flex flex-col justify-between gap-y-24">
            <Banner />
            <Formulario>
                <Botao
                    texto="Login"
                    className="mt-10"
                    tipo="primario"
                    onClick={() => { console.log('Login'); }}
                />
                <Botao
                    texto="Solicitar acesso"
                    className="mt-10"
                    tipo="secundario"
                    onClick={() => { console.log('Solicitar acesso'); }}
                />
            </Formulario>
            <Rodape />
        </div>
    );
}
