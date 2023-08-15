import Link from "next/link";

import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import Image from "next/image";
import { Cart } from "../Cart";

export function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImg} alt="logo" />
            </Link>

            <Cart />
        </HeaderContainer>
    );
}