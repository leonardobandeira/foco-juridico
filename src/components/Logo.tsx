"use client";
import Image from "next/image";
import logo from '../assets/logo/logo.svg';
import logo_dark from '../assets/logo/logo-dark.svg';
import useAppData from "@/data/hook/useAppData";
import Link from "next/link";

export default function Logo({ classes = '' }) {
    const { tema, usuario } = useAppData();

    const renderLogo = () => (
        <div className={`${classes}`}>
            <Image src={!tema ? logo : logo_dark} alt="Logo"></Image>
        </div>
    )

    const renderLogoLink = () => (
        <Link href={'/home'}>
            <div className={`${classes}`}>
                <Image src={!tema ? logo : logo_dark} alt="Logo"></Image>
            </div>
        </Link>
    )

    return !usuario.uid ? renderLogo() : renderLogoLink()

}