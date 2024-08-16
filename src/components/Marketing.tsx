import TRF5 from './../assets/logo/trf5.svg'
import Metropole from './../assets/logo/metropole.svg'
import Image from 'next/image'

interface MarketingProps {
    style?: string
}

export default function Marketing({ style }: MarketingProps) {
    return (
        <div className={`h-1 flex flex-col gap-2 ${style}`}>
            <p className={`font-medium text-pretty text-md text-center tracking-wider`}>Impulsionado por:</p>
            <div className={`flex flex-row justify-center gap-16`}>
                <Image className={`w-20`} src={TRF5} alt="Logo do TRF5"></Image>
                <Image className={`w-20`} src={Metropole} alt="Logo do Metropole"></Image>
            </div>
            <div className='h-1'></div>
            {/*<h6 className={`text-gray-400 font-bold text-xl tracking-wide text-center pb-2`}>2024</h6>*/}
        </div>
    )
}