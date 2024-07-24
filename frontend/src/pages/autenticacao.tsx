import Banner from "../components/auth/Banner";
import Login from "../components/auth/Login";
import useAppData from "../data/hook/useAppData";
import Inicio from "../components/auth/Inicio";
import SolicitarAcesso from "../components/auth/SolicitarAcesso";
import Quadrantes from "../components/templete/Quadrantes";
import Sobre from "../components/sobre/Sobre";
import Registrar from "../components/auth/Registrar";

export default function Autenticacao() {
    const { authPage } = useAppData();

    let ladoEsquerdo = <Banner />;
    let ladoDireito = null;
    let rodape = null;

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
        ladoDireito = <Sobre />;
    }

    return (
        <Quadrantes left={ladoEsquerdo} right={ladoDireito} bottom={rodape} back />
    );
}
