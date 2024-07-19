interface QuadrantesProps {
    left?: any;
    right: any;
    bottom?: any;
}

export default function Quadrantes(props: QuadrantesProps) {
    const { left, right, bottom } = props;
    const hasLeft = !!left;

    return (
        <>
            <div className={`min-h-screen flex flex-col md:flex-row`}>
                {hasLeft && (
                    <div className={`hidden md:flex md:w-1/2 justify-center items-center bg-sky-50`}>
                        {left}
                    </div>
                )}
                <div className={`flex-1 flex justify-center items-center ${hasLeft ? 'md:w-1/2' : 'w-full'}`}>
                    {right}
                </div>
            </div>
            {bottom}
        </>
    );
}
