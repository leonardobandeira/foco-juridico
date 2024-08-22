"use client";

import AlertasAtivos from "@/components/listas/AlertasAtivos";

export default function Home() {
    return (
        <div className={`flex md:flex-row flex-col w-full justify-evenly `}>
            <AlertasAtivos />
            <AlertasAtivos />
        </div>
    );
}
