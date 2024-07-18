import Banner from "../components/auth/Banner";
import Rodape from "./../components/templete/Rodape";
import Login from "../components/auth/Login";

export default function Autenticacao() {
    return (
        <div className={`h-screen flex flex-col justify-around`}>
            <div className={`flex flex-col md:flex-row justify-center items-center`}>
                <div className={`hidden md:inline-flex h-screen w-3/5 flex-row justify-center`}>
                    <Banner />
                </div>
                
                <div className={`md:w-2/5 w-full md:px-0 px-8
                md:inline-flex flex-row justify-center items-center`}>
                    <Login />
                </div>

            </div >
            <Rodape />
        </div >
    )
}