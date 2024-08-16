import TRF5 from './../../assets/logo/trf5.svg'
import Metropole from './../../assets/logo/metropole.svg'
import Image from 'next/image'

export default function Rodape() {
    return (
        <div className={`h-1 flex flex-col`}>
            <div className={`flex flex-row justify-center gap-16`}>
                <Image className={`w-1/10`} src={TRF5} alt="Logo do TRF5"></Image>
                <Image className={`w-1/10`} src={Metropole} alt="Logo do Metropole"></Image>
            </div>
            <div className='h-1'></div>
            {/*<h6 className={`text-gray-400 font-bold text-xl tracking-wide text-center pb-2`}>2024</h6>*/}
        </div>
    )
}