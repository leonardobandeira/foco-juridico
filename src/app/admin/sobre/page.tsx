import Sobre from "@/components/sobre/Sobre";

export default function Page() {
    return (
        <div className={`min-h-screen flex flex-col md:flex-row`}>
            <div className={`flex-1 flex flex-col justify-center items-center w-full`}>
                <Sobre />
            </div>
        </div>
    );
}