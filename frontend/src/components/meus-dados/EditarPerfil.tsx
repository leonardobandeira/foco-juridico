import { useState } from "react";
import Botao from "../../components/form/Botao";
import Formulario from "../../components/form/Formulario";
import Input from "../../components/form/Input";
import Foto from "../templete/MenuTopo/Foto";
import { MailIcon } from "lucide-react";

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

            <Formulario>
                <Input
                    label="Nome completo"
                    tipo="text"
                    valor={nome}
                    onChange={setNome}
                    obrigatorio
                    icone={MailIcon}
                />
                <Input
                    label="Endereço de email"
                    tipo="text"
                    valor={email}
                    onChange={setEmail}
                    obrigatorio
                    icone={MailIcon}
                />
                <Input
                    label="Número de telefone"
                    tipo="text"
                    valor={telefone}
                    onChange={setTelefone}
                    obrigatorio
                    icone={MailIcon}
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