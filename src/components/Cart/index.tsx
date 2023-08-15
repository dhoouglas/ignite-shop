import * as Dialog from '@radix-ui/react-dialog';
import { CartButton } from "../CartButton";
import { CartClose, CartContainer, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';
import { X } from 'phosphor-react';
import Image from 'next/image';

import testeImage from "../../assets/Camisetas/1.png";

export function Cart() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton />
            </Dialog.Trigger>

            <Dialog.Portal>
                <CartContainer>
                    <CartClose>
                        <X size={24} weight="bold" />
                    </CartClose>

                    <h2>Sacola de compras</h2>
                    
                    <section>
                        {/*<p>Parece que seu carrinho está vazio :( </p>*/}

                        <CartProduct>
                            <CartProductImage>
                                <Image 
                                    width={100}
                                    height={93}
                                    alt=""
                                    src={testeImage}
                                />
                            </CartProductImage>

                            <CartProductDetails>
                                <p>Produto 1</p>
                                <strong>R$ 50.00</strong>
                                <button>Remover</button>
                            </CartProductDetails>
                        </CartProduct>
                    </section>

                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>2 itens</p>
                            </div>

                            <div>
                                <span>Valor total</span>
                                <p>R$ 100.00</p>
                            </div>
                        </FinalizationDetails>
                        
                        <button>Finalizar Compra</button>    
                    </CartFinalization>
                </CartContainer>
            </Dialog.Portal>
        </Dialog.Root>
        
    );
}