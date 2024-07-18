import Banner from "../components/auth/Banner";
import Rodape from "../components/templete/Rodape";
import Login from "../components/auth/Login";

export default function Autenticacao() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
                <div className="hidden md:flex h-screen w-3/5 justify-center">
                    <Banner />
                </div>
                <div className="md:w-2/5 w-full md:px-0 px-8 flex justify-center items-center">
                    <Login />
                </div>
            </div>
            <div className="mt-auto">
                <Rodape />
            </div>
        </div>
    )
}
