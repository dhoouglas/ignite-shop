// import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import Image from "next/image";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {

    return (
        <>
            <ProductContainer>
                <ImageContainer>

                </ImageContainer>
                   
                <ProductDetails>
                    <h1>Camiseta X</h1>
                    <span>R$ 79,90</span>

                    <p> Testando </p>
                    <button>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    );
}

/*
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_OEttoqB8L28RfE'} }
        ],
        fallback: 'blocking',
    }
}
*/

/*
export const getStatic: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 1, // 1 hour
    }
} 

*/