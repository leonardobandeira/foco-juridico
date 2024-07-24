import LinkInformativo from "../auth/LinkInformativo";
import Botao from "../form/Botao";

interface QuadrantesProps {
    left: JSX.Element | null;
    right: JSX.Element | null;
    bottom: JSX.Element | null;
    back: boolean;
}

export default function Quadrantes(props: QuadrantesProps) {
    const { left, right, bottom, back = false } = props;
    const hasLeft = !!left;

    return (
        <>
            <div className={`min-h-screen flex flex-col md:flex-row`}>
                {hasLeft && (
                    <div className={`hidden md:flex md:flex-col md:w-1/2 justify-center items-center bg-sky-50`}>
                        {left}
                    </div>
                )}
                <div className={`flex-1 flex flex-col justify-center items-center ${hasLeft ? 'md:w-1/2' : 'w-full'}`}>

                    {right}
                </div>
            </div>
            {bottom}
        </>
    );
}
