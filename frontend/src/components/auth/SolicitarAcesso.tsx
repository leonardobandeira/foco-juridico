import Botao from "@/components/form/Botao";
import { useState } from "react";
import LinkInformativo from "./LinkInformativo";
import Input from "@/components/form/Input";
import Formulario from "@/components/form/Formulario";
import Logo from "@/components/Logo";
import { Mail } from "lucide-react"

export default function SolicitarAcesso() {
    const [email, setEmail] = useState('');

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario >
                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        icone={Mail}
                        obrigatorio={false}
                    />

                    <Botao
                        texto="Solicitar"
                        className="mt-14"
                        tipo="primario"
                        onClick={() => { console.log('Teste'); }}
                    />
                </Formulario>
            </div>

            <LinkInformativo texto="Já tenho um cadastro." texto2="Entrar" rota="" />
        </div>
    );
}