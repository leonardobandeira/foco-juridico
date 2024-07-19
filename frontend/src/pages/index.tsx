import Banner from "../components/auth/Banner";
import AlertasAtivos from "../components/listas/AlertasAtivos";
import Layout from "../components/templete/Layout";
import Quadrantes from "../components/templete/Quadrantes";

export default function Home() {
  let ladoEsquerdo = <Banner />;
  let ladoDireito = <Banner />;
  let rodape = null;

  return (
    <Layout
      titulo="Foco Jurídico"
      subtitulo="Em construção!"
    >
        <div className={`flex flex-row w-full flex-grow`}>
        <AlertasAtivos/>
        <AlertasAtivos/>
        </div>
    </Layout>
  );
}
