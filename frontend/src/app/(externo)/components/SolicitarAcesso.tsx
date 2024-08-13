import { useState } from "react";

import Formulario from "../../shared/form/Formulario";
import AuthInput from "../../shared/form/Input";
import Botao from "../../shared/form/Botao";
import Logo from "../../shared/Logo";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import LinkInformativo from "./LinkInformativo";

export default function SolicitarAcesso() {
    const [email, setEmail] = useState('');

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario titulo="Solicitar acesso">
                    <AuthInput
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                        icone={faEnvelope}
                    />

                    <Botao
                        texto="Solicitar"
                        className="mt-14"
                        tipo="primario"
                        onClick={() => { console.log('Teste'); }}
                    />
                </Formulario>
            </div>

            <LinkInformativo texto="Já tenho um cadastro." texto2="Entrar" rota=""/>
        </div>
    );
}