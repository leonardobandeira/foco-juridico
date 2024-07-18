import Logo from "../templete/Logo";
import Rodape from "../templete/Rodape";

export default function Sobre() {
    return (
        <div className="md:w-2/3 w-full flex flex-col justify-center gap-8">
            <Logo />
            <p>Este aplicativo é fruto de uma iniciativa colaborativa entre a Residência em Tecnologia da Informação (TI)
                da Universidade Federal do Rio Grande do Norte (UFRN) e o Tribunal Regional Federal da 5ª Região (TRF5).
                Trata-se de um Trabalho de Conclusão de Curso (TCC)
                desenvolvido por um residente da concentração de Desenvolvimento de Software.</p>

            <p>O projeto visa inovar e melhorar processos tecnológicos, contribuindo para
                a modernização dos serviços do
                TRF5 e a formação especializada dos residentes.</p>

            <p>
                Saiba mais em:
                <a href='https://residenciaregional.jfrn.jus.br/' alt='Site da Residência Regional'>
                      <strong> residenciaregional.jfrn.jus.br</strong>
                </a>
            </p>

            <Rodape />
        </div>
    );
}
