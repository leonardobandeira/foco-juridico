"use client";

import EditarPerfil from "@/components/meus-dados/EditarPerfil";
import Layout from "@/components/templete/Layout";
import { useState } from "react";

export default function Home() {
    const [proximo, setProximo] = useState(false);

    return (
        <Layout>
            <div className={`flex md:flex-row flex-col w-full justify-evenly`}>
                <div className={`w-full max-w-md px-4`}>
                    <EditarPerfil />
                </div>
            </div>
        </Layout>
    );
}
