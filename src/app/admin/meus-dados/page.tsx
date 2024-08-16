"use client";

import EditarPerfil from "@/components/meus-dados/EditarPerfil";
import Layout from "@/components/templete/Layout";
import { useState } from "react";

export default function Home() {
    const [proximo, setProximo] = useState(false);

    return (
        <EditarPerfil />
    );
}
