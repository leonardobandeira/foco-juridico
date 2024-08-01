import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenu } from "./../../../components/ui/dropdown-menu";
import Foto from "./Foto";
import {
    LogOut,
    User,
    Copyright
} from "lucide-react"
export default function MenuPessoal() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><div className="flex gap-2 items-center">
                <div className="flex flex-col items-end">
                    <span className="text-lg font-bold leading-5">Leonardo Bandeira</span>
                    <span className="text-xs text-zinc-400">lucena.lbd@gmail.com</span>
                </div>
                <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10 p-1 bg-zinc-700">
                    <Foto classes={`rounded-full w-[50px] h-[50px]`} />

                </div>
            </div></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2 h-4 w-4" />Meus dados</DropdownMenuItem>
                <DropdownMenuItem><Copyright className="mr-2 h-4 w-4" />Sobre nos</DropdownMenuItem>
                <DropdownMenuItem ><LogOut className="mr-2 h-4 w-4" />Sair</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}