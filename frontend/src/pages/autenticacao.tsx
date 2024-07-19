import Banner from "../components/auth/Banner";
import Rodape from "../components/templete/Rodape";
import Login from "../components/auth/Login";
import useAppData from "../data/hook/useAppData";
import Inicio from "../components/auth/Inicio";
import SolicitarAcesso from "../components/auth/SolicitarAcesso";
import Quadrantes from "../components/templete/Quadrantes";

export default function Autenticacao() {
    const { authPage } = useAppData();

    let ladoEsquerdo = <Banner />;
    let ladoDireito = <Inicio />;
    let rodape = null;

    if (authPage === '') {
        ladoEsquerdo = null;
    }

    if (authPage === 'login') {
        ladoDireito = <Login />;
    }

    if (authPage === 'cadastro') {
        ladoDireito = <h1>Cadastro</h1>;
    }

    if (authPage === 'solicitar') {
        ladoDireito = <SolicitarAcesso />;
    }

    return (
        <Quadrantes left={ladoEsquerdo} right={ladoDireito} bottom={rodape} />
    );
}
