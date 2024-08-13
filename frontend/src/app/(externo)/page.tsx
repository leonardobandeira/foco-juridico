"use client";

import Login from "@/components/auth/Login";
import Registrar from "@/components/auth/Registrar";
import useAppData from "@/data/hook/useAppData";

export default function Index() {
    const { authPage } = useAppData();

    const renderAuthPage = () => {
        if (authPage === 'login') {
            return <Login />;
        }
        if (authPage === 'registrar') {
            return <Registrar />;
        }

        return <h1>Página não encontrada!</h1>
    };

    return (
        <div>
            {renderAuthPage()}
        </div>
    );
}
