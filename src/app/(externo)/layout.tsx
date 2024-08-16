import Banner from "@/components/Banner"
import { ReactNode } from "react"

interface LayoutProps {
    children?: ReactNode
}

export default function LayoutExterno({ children }: LayoutProps) {
    return (
        <>
            <div className={`min-h-screen flex flex-col md:flex-row`}>
                <div className={`hidden md:flex md:flex-col md:w-1/2 justify-center items-center bg-sky-50`}>
                    <Banner />
                </div>

                <div className={`flex-1 flex flex-col justify-center items-center 'md:w-1/2'}`}>
                    {children}
                </div>
            </div>
        </>
    )
}