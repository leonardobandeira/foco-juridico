import Banner from "../components/auth/Banner";
import Login from "../components/auth/Login";
import useAppData from "../data/hook/useAppData";
import SolicitarAcesso from "../components/auth/SolicitarAcesso";
import Quadrantes from "../components/templete/Quadrantes";
import Sobre from "../components/sobre/Sobre";
import Registrar from "../components/auth/Registrar";

export default function Autenticacao() {
    const { authPage } = useAppData();

    let ladoEsquerdo: JSX.Element | null = <Banner />;
    let ladoDireito: JSX.Element | null = null;
    let rodape: JSX.Element | null = null;

    if (authPage === '') {
        ladoDireito = <Sobre />;
        ladoEsquerdo = null;
    }

    if (authPage === 'login') {
        ladoDireito = <Login />;
    }

    if (authPage === 'registrar') {
        ladoDireito = <Registrar />;
    }

    if (authPage === 'solicitar') {
        ladoDireito = <SolicitarAcesso />;
    }

    return (
        <Quadrantes left={ladoEsquerdo} right={ladoDireito} bottom={rodape} back={false} />
    );
}
