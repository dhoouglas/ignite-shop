import Link from "next/link";

import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import Image from "next/image";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
    const { pathname } = useRouter();

    const showCartButton = pathname !== '/success';

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImg} alt="logo" />
            </Link>

            {showCartButton && <Cart />}
        </HeaderContainer>
    );
}