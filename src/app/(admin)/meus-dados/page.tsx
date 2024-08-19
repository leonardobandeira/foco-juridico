"use client";
import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import Foto from "@/components/templete/MenuTopo/Foto";
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Input from "@/components/form/Input";
import useAppData from "@/data/hook/useAppData";

export default function MeusDados() {
    const { usuario } = useAppData();

    const [nome, setNome] = useState(usuario.nome);
    const [email, setEmail] = useState(usuario.email);
    const [telefone, setTelefone] = useState(usuario.uid);

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-center md:gap-16 items-center">
            <div className="flex flex-col items-center mb-4 md:mb-0">
                <Foto classes="rounded-full w-36 h-36 object-cover" />
                <p className="text-2xl font-black mt-4">{nome}</p>
                <p className="text-lg text-gray-400 font-normal">Juiz Federal</p>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-50 px-12 py-6 rounded-lg">
                <h1 className="text-gray-400 text-lg font-semibold text-center">Meus dados</h1>
                <Formulario onSubmit={handleSave} className="w-full md:w-auto border-t border-gray-300">
                    <Input
                        label="Nome completo"
                        tipo="text"
                        valor={nome}
                        onChange={(e) => setNome(e.target.value)}
                        obrigatorio
                        icone={User}
                    />
                    <Input
                        label="Endereço de email"
                        tipo="text"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        obrigatorio
                        icone={Mail}
                    />
                    <Input
                        label="Número de telefone"
                        tipo="text"
                        valor={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        obrigatorio
                        icone={Phone}
                    />
                    <Botao
                        texto="Salvar alterações"
                        className="mt-8 w-full"
                        tipo="primario"
                        onClick={() => handleSave}
                    />
                </Formulario>
            </div>
        </div>
    );
}
