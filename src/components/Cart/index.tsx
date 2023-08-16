import * as Dialog from '@radix-ui/react-dialog';
import { CartButton } from "../CartButton";
import { CartClose, CartContainer, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';
import { X } from 'phosphor-react';
import Image from 'next/image';

import testeImage from "../../assets/Camisetas/1.png";
import { useCart } from '../../hooks/useCart';

export function Cart() {
    const { cartItems, removeCartItem, cartTotal } = useCart();
    const cartQuantity = cartItems.length;

    const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL'
    }).format(cartTotal);

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
                        {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio :( </p>}

                        {cartItems.map((cartItem) => (
                            <CartProduct key={cartItem.id}>
                                <CartProductImage>
                                    <Image 
                                        width={100}
                                        height={93}
                                        alt=""
                                        src={cartItem.imageUrl}
                                    />
                                </CartProductImage>

                                <CartProductDetails>
                                    <p>{cartItem.name}</p>
                                    <strong>{cartItem.price}</strong>

                                    <button onClick={() => removeCartItem(cartItem.id)}>
                                        Remover
                                    </button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}

                    </section>

                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>{cartQuantity} {cartQuantity === 1 ? "item" : "itens"} </p>
                            </div>

                            <div>
                                <span>Valor total</span>
                                <p>{formattedCartTotal}</p>
                            </div>
                        </FinalizationDetails>
                        
                        <button>Finalizar Compra</button>    
                    </CartFinalization>
                </CartContainer>
            </Dialog.Portal>
        </Dialog.Root>
        
    );
}