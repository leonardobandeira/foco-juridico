import { useState } from "react";

import Formulario from "../form/Formulario";
import AuthInput from "../form/Input";
import Botao from "../form/Botao";
import Logo from "../templete/Logo";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import JaTenhoCadastro from "./JaTenhoCadastro";

export default function SolicitarAcesso() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div className="md:w-2/3 w-full flex flex-col justify-center">
            <Formulario>
                <div className="md:hidden mb-12 flex justify-center">
                    <Logo />
                </div>
                <h1 className="font-bold md:text-4xl text-3xl mb-10 tracking-wider">
                    Solicitar acesso
                </h1>
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
            <JaTenhoCadastro />
        </div>
    );
}
