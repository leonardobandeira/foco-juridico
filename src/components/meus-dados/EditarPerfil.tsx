import { useState } from "react";
import Botao from "../form/Botao";
import Formulario from "../form/Formulario";
import Input from "../form/Input";
import Foto from "../templete/MenuTopo/Foto";

export default function EditarPerfil() {
    const [proximo, setProximo] = useState(false);
    const [nome, setNome] = useState('Vagner Cavalcante');
    const [email, setEmail] = useState('vagner_cavalcante@trf5.jus.br');
    const [telefone, setTelefone] = useState('+84999999999');

    return (
        <div className="flex flex-col items-center w-auto">
            <div className="flex flex-col items-center">
                <Foto classes="rounded-full w-36 h-36 object-cover" />
                <p className="text-2xl font-black">Vagner Cavalcante</p>
                <p className="text-lg text-gray-400 font-normal">Juiz Federal</p>
            </div>

            <Formulario titulo="">
                <Input
                    label="Nome completo"
                    tipo="text"
                    valor={nome}
                    onChange={setNome}
                />
                <Input
                    label="Endereço de email"
                    tipo="text"
                    valor={email}
                    onChange={setEmail}
                />
                <Input
                    label="Número de telefone"
                    tipo="text"
                    valor={telefone}
                    onChange={setTelefone}
                />
                <Botao
                    texto="Salvat alterações"
                    className={`mt-8 w-full`}
                    tipo="primario"
                    onClick={() => setProximo(false)}
                />
            </Formulario>
        </div>
    )
}