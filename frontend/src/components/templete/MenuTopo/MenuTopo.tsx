import Foto from "./Foto";
import Logo from "../Logo";
import MenuPessoal from './MenuPessoal';

interface MenuTopoProps {

}
export default function MenuTopo(props: MenuTopoProps) {
    return (
        <div className={`w-full flex flex-row justify-between items-center mb-4 bg-gray-100 p-4`}>
            <Logo classes={`w-[120px]`} />
            
            <MenuPessoal/>
        </div>
    )
}

/***

<BotaoAlternarTema tema={tema} alternarTema={alternarTema} />

 */