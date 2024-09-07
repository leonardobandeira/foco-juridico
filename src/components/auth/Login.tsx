"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { signInWithGoogle, signInWithEmailAndPass } from "@/lib/firebase/auth";
import { usuarioNormalizado } from "@/model/Usuario";
import useAppData from "@/data/hook/useAppData";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/lib/constants";
import Botao from "../form/Botao";
import Formulario from "../form/Formulario";
import TituloFormulario from "../form/TituloFormulario";
import Logo from "../Logo";
import LinkInformativo from "./LinkInformativo";
import Input from "../form/Input";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const { setUsuario } = useAppData();
  const router = useRouter();

  const handleSignInWithEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPass(email, senha);
      if (user) {
        const usuario = await usuarioNormalizado(user);
        console.log("Usuário logado feliz:", usuario);
        setUsuario(usuario);
        router.push(HOME_ROUTE);
      }
    } catch (error) {
      setErro('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      console.error('Login failed', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        const usuario = await usuarioNormalizado(user);
        console.log("Usuário logado feliz com Google:", usuario);
        setUsuario(usuario);
        router.push(HOME_ROUTE);
      }
    } catch (error) {
      setErro('Erro ao fazer login com o Google.');
      console.error('Google login failed', error);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
      <div className={`md:hidden mb-12`}>
        <Logo />
      </div>

      <div className={`w-full max-w-md px-4`}>
        <Formulario onSubmit={handleSignInWithEmail}>
          <TituloFormulario titulo="Entrar" />

          <Input
            label="Endereço de Email"
            valor={email}
            tipo="email"
            onChange={e => setEmail(e.target.value)}
            icone={Mail}
            obrigatorio
          />
          <Input
            label="Senha"
            tipo="password"
            valor={senha}
            onChange={e => setSenha(e.target.value)}
            icone={Lock}
            obrigatorio
          />
          {erro && <p className="text-red-500">{erro}</p>}
          <Botao
            texto="Entrar"
            className="mt-10"
            tipo="primario"
          />
          <Botao
            texto="Entrar com o Gmail"
            className={`bg-red-500`}
            tipo="secundario"
            onClick={handleSignInWithGoogle}
          />
        </Formulario>
      </div>

      <LinkInformativo
        texto="É novo aqui?"
        texto2="Registre-se"
        rota={'registrar'}
      />
    </div>
  );
}
