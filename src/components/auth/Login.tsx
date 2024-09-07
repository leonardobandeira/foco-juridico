"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { signInWithGoogle } from "@/lib/firebase/auth";
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
  const { setUsuario } = useAppData();
  const router = useRouter();

  const handleSignIn = async () => {
    const user = await signInWithGoogle();

    if (user) {
      const usuario = await usuarioNormalizado(user);
      console.log("Usuário logado feliz:", usuario);
      setUsuario(usuario);
      router.push(HOME_ROUTE);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 w-full`}>
      <div className={`md:hidden mb-12`}>
        <Logo />
      </div>

      <div className={`w-full max-w-md px-4`}>
        <Formulario className="flex flex-col items-center">
          <TituloFormulario titulo="Entrar" />

          <Input
            label="Endereço de Email"
            valor="11"
            tipo="email"
            onChange={() => { }}
            icone={Mail}
            obrigatorio={false}
          />
          <Input
            label="Senha"
            tipo="password"
            valor="11"
            onChange={() => { }}
            icone={Lock}
            obrigatorio={false}
          />
          <Botao
            texto="Entrar com o Gmail"
            className={`bg-red-500`}
            tipo="secundario"
            onClick={handleSignIn}
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
