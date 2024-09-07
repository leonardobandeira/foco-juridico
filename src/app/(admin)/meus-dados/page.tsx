"use client";

import { useState } from "react";
import { User, Mail, Phone, BriefcaseBusiness } from "lucide-react";
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Input from "@/components/form/Input";
import useAppData from "@/data/hook/useAppData";
import { ref, set } from "firebase/database";
import { firebaseDatabase } from "@/lib/firebase/config";
import Image from "next/image";
import foto from './../../../assets/persona1.jpg';

export default function MeusDados() {
    const { usuario } = useAppData();

    const [nome, setNome] = useState(usuario?.nome || '');
    const [email, setEmail] = useState(usuario?.email || '');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!usuario) {
            console.error('Nenhum usuário está autenticado');
            return;
        }

        try {
            const userRef = ref(firebaseDatabase, `users/${usuario.uid}`);
            await set(userRef, {
                telefone,
                cargo,
            });

            console.log('Dados atualizados com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-center md:gap-16 items-center">
            <div className="flex flex-col items-center mb-4 mr-6 md:mb-0">
                <div className="relative md:w-[300px] md:h-[300px] w-[180px] h-[180px]">
                    <Image
                        src={usuario?.picture || foto}
                        alt="Imagem de perfil do usuário"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <p className="text-2xl font-black mt-4">{nome}</p>
                <p className="text-lg text-gray-400 font-normal">{cargo}</p>
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
                        tipo="email"
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
                    <Input
                        label="Cargo"
                        tipo="text"
                        valor={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        obrigatorio
                        icone={BriefcaseBusiness}
                    />
                    <Botao
                        texto="Salvar alterações"
                        className="mt-8 w-full"
                        tipo="primario"
                    />
                </Formulario>
            </div>
        </div>
    );
}
