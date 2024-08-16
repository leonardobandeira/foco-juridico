import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SelectProps {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    icone?: LucideIcon;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: ReactNode;
}

export default function Select(props: SelectProps) {
    const { icone: Icon } = props;

    return (
        <div className="flex flex-col mt-4">
            <label className="text-gray-400 font-normal tracking-wider">
                <span>{props.label}</span>

                <div className="flex flex-row items-center gap-4 border-b-2 border-gray-100">
                    {Icon && <Icon className="mr-2 h-4 w-4 text-gray-500" />}
                    <select
                        className="flex-grow py-2 text-black bg-transparent focus:bg-gray-50"
                        value={props.valor}
                        onChange={e => props.onChange(e)}
                        required={props.obrigatorio}
                    >
                        {props.children}
                    </select>
                </div>
            </label>
        </div>
    );
}
