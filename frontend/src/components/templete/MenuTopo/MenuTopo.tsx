import { faCog } from '@fortawesome/free-solid-svg-icons'
import Foto from "./Foto";
import Logo from "../Logo";

interface MenuTopoProps {

}
export default function MenuTopo(props: MenuTopoProps) {
    return (
        <div className={`w-full flex flex-row justify-between items-center mb-4 bg-gray-100 p-4`}>
            <Logo classes={`w-[120px]`} />
            <div className="flex gap-2 items-center">
                <div className="flex flex-col items-end">
                    <span className="text-lg font-bold leading-5">Leonardo Bandeira</span>
                    <span className="text-xs text-zinc-400">lucena.lbd@gmail.com</span>
                </div>
                <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10 p-1 bg-zinc-700">
                    <Foto classes={`rounded-full w-[50px] h-[50px]`} />

                </div>
            </div>
        </div>
    )
}
