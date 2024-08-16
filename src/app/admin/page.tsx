"use client";

import Banner from "@/components/auth/Banner";
import AlertasAtivos from "@/components/listas/AlertasAtivos";
import Layout from "@/components/templete/Layout";

export default function Home() {
    let ladoEsquerdo = <Banner />;
    let ladoDireito = <Banner />;
    let rodape = null;

    return (
        <Layout
            titulo="Foco Jurídico"
            subtitulo="Bem vindo fulado!"
        >
            <div className={`flex md:flex-row flex-col w-full justify-evenly `}>
                <AlertasAtivos />
                <AlertasAtivos />
            </div>
        </Layout>
    );
}
