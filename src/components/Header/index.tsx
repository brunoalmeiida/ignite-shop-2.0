import Link from "next/link";
import { HeaderContatiner } from "./styles";
import logoImg from "../../assets/logo.svg"
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
    const { pathname } = useRouter()

    const showCartButton = pathname !== "/success"

    return (
        <HeaderContatiner>
            <Link href="/">
                <img src={logoImg.src} alt="" />
            </Link>
            {showCartButton && <Cart />}
        </HeaderContatiner>
    )
}