import Link from "next/link";
import { ImageContainer, SuccessContaner } from "../styles/pages/success";

export default function Success() {
    return (
       <SuccessContaner>
            <h1>Compra Efetuada</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Douglas Lima</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
       </SuccessContaner>
    );
}