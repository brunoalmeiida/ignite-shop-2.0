import { CartButton } from "../CartButton";
import * as Dialog from "@radix-ui/react-dialog";
import { CartClose, CartContent, CartProduct, CartProductImage, CartProductDetails, CartFinalization, FinalizationDetails } from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import axios from "axios";

export function Cart() {
    const { cartItems, removeCart, cartTotal } = useCart()
    const cartQuantity = cartItems.length

    const formattedVartTotal = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(cartTotal)

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post("/api/checkout", {
                products: cartItems
            })

            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl

        } catch {
            setIsCreatingCheckoutSession(false)
            alert("Falha ao redirecionar ao checkout")
        }
    }

    
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton />
            </Dialog.Trigger>

            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold" />
                    </CartClose>

                    <h2>Sacola de compras</h2>

                    <section>                 
                        {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio</p>}

                        {cartItems.map((cartItem) => (
                            <CartProduct>
                                <CartProductImage>
                                    <Image 
                                        src={cartItem.imageUrl} 
                                        width={100} 
                                        height={93} 
                                        alt="" 
                                    />
                                </CartProductImage>
                                <CartProductDetails>
                                    <p>{cartItem.name}</p>
                                    <strong>{cartItem.price}</strong>                                    
                                    <button onClick={() => removeCart(cartItem.id)}>Remover</button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}
                    </section>

                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>{cartQuantity} {cartQuantity === 1 ? "item" : "itens"}</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>{formattedVartTotal}</p>
                            </div>
                        </FinalizationDetails>

                        <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartQuantity <= 0}>
                            Finalizar compra
                        </button>
                    </CartFinalization>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}