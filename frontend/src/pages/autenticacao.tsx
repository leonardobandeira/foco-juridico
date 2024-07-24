import useAppData from "../data/hook/useAppData";
import Banner from "../components/auth/Banner";
import Login from "../components/auth/Login";
import Registrar from "../components/auth/Registrar";
import Quadrantes from "../components/templete/Quadrantes";

export default function Autenticacao() {
    const { authPage } = useAppData();

    let ladoEsquerdo: JSX.Element | null = <Banner />;
    let ladoDireito: JSX.Element | null = null;
    let rodape: JSX.Element | null = null;

    if (authPage === 'login') {
        ladoDireito = <Login />;
    }

    if (authPage === 'registrar') {
        ladoDireito = <Registrar />;
    }

    return (
        <Quadrantes left={ladoEsquerdo} right={ladoDireito} bottom={rodape} back={false} />
    );
}
