import { IconeLinkedin, IconeEmail, IconeGithub } from "@/components/icons";
import Logo from "@/components/Logo";
import Marketing from "@/components/Marketing";

export default function Sobre() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <Logo />
            <div className={`min-w-[400px] max-w-[650px] max-h-screen px-6 flex flex-col md:gap-4 gap-8 mt-4`}>
                <p>Este aplicativo é fruto de uma iniciativa colaborativa entre a Residência em Tecnologia da Informação (TI)
                    da Universidade Federal do Rio Grande do Norte (UFRN) e o Tribunal Regional Federal da 5ª Região (TRF5).
                    Trata-se de um Trabalho de Conclusão de Curso (TCC)
                    desenvolvido por um residente da concentração de Desenvolvimento de Software.</p>

                <p>O projeto visa inovar e melhorar processos tecnológicos, contribuindo para
                    a modernização dos serviços do
                    TRF5 e a formação especializada dos residentes. Saiba mais em:
                    <a className="text-base1" href='https://residenciaregional.jfrn.jus.br/' target="_blank">
                        <strong> residenciaregional.jfrn.jus.br</strong>.
                    </a></p>

                <p>
                    <span className="flex flex-row items-center">
                        Desenvolvido por<a className="text-base1 flex items-center" href='https://www.linkedin.com/in/leonardoblucena/' target="_blank" rel="noopener noreferrer">
                            <strong className="ml-1">Leonardo Lucena</strong>
                            <div className="w-4 h-4 ml-4"><IconeLinkedin /></div>
                        </a>
                        <div className="flex flex-row items-center mt-1">
                            <div className="w-4 h-4 ml-4"><a href="mailto:lucena.lbd@gmail.com?subject=Oi, podemos conversar?"><IconeEmail /></a></div>
                            <div className="w-4 h-4 ml-4"><a href="https://github.com/leonardobandeira"><IconeGithub /></a></div>
                        </div>
                    </span>

                </p>

            <Marketing style="mb-24" />
            </div>
        </div>
    );
}
