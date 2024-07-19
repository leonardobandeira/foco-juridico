import Botao from "../form/Botao";

interface QuadrantesProps {
    left?: any;
    right: any;
    bottom?: any;
    back?: boolean;
}

export default function Quadrantes(props: QuadrantesProps) {
    const { left, right, bottom, back = false } = props;
    const hasLeft = !!left;

    return (
        <>
            <div className={`min-h-screen flex flex-col md:flex-row`}>
                {hasLeft && (
                    <div className={`hidden md:flex md:w-1/2 justify-center items-center bg-sky-50`}>
                        {left}
                    </div>
                )}
                <div className={`flex-1 flex flex-col justify-center items-center ${hasLeft ? 'md:w-1/2' : 'w-full'}`}>
                    <Botao
                        className={`${back ? 'block' : 'hidden'} mt-6`}
                        tipo="voltar"
                        onClick={() => { console.log('Teste'); }}
                    />
                    {right}
                </div>
            </div>
            {bottom}
        </>
    );
}
