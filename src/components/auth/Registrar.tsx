"use client";
import { useState } from "react";
import LinkInformativo from "./LinkInformativo";
import TituloFormulario from "@/components/form/TituloFormulario";
import { Mail, Lock, User, Phone } from "lucide-react";
import Botao from "@/components/form/Botao";
import Formulario from "@/components/form/Formulario";
import Logo from "@/components/Logo";
import useAppData from "@/data/hook/useAppData";
import Input from "@/components/form/Input";
import { cadastrar } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function Registrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const { setUsuario } = useAppData();
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      const user = await cadastrar(email, senha);
      if (user) {
        setUsuario({
          uid: user.uid,
          nome: user.displayName || "",
          email: user.email || "",
          token: await user.getIdToken(),
          provedor: user.providerData[0]?.providerId || "",
          picture: user.photoURL || "",
        });
        router.push('/home');
      }
    } catch (error) {
      setErro('Erro ao criar conta. Verifique suas informações e tente novamente.');
    }
  };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
            <div className={`md:hidden mb-12`}>
                <Logo />
            </div>

            <div className={`w-full max-w-md px-4`}>
                <Formulario onSubmit={handleRegister}>
                    <TituloFormulario titulo="Registrar-se" />
                    <Input
                        label="Endereço de Email"
                        tipo="email"
                        valor={email}
                        onChange={(e) => setEmail(e.target.value)}
                        obrigatorio
                        icone={Mail}
                    />
                    <Input
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        obrigatorio
                        icone={Lock}
                    />
                    <Input
                        label="Confirme a senha"
                        tipo="password"
                        valor={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        obrigatorio
                        icone={Lock}
                    />
                    <Botao
                        texto="Registrar-se"
                        className={`mt-8`}
                        tipo="primario"
                    />
                </Formulario>
            </div>

            <LinkInformativo texto="Já tenho um cadastro." texto2="Entrar" rota="login" />
        </div>
    );
}
