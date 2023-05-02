import { ReactNode, createContext, useState } from "react";

export interface Products {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
    numberPrice: number;
    defaultPriceId: string;
}

interface CartContextData {
    cartItems: Products[];
    cartTotal: number;
    addToCart: (product: Products) => void;
    removeCart: (productId: string) => void;
    checkIfItemsAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<Products[]>([])

    const cartTotal = cartItems.reduce((total, product) => {
        return total + product.numberPrice
    }, 0)

    function addToCart(product: Products) {
        setCartItems((state) => [...state, product])
    }

    function removeCart(productId: string) {
        setCartItems((state) => state.filter((item) => item.id !== productId))
    }

    function checkIfItemsAlreadyExists(productId: string) {
        return cartItems.some((product) => product.id === productId)
    }

    return (
        <CartContext.Provider value={{ cartItems, cartTotal, addToCart, removeCart, checkIfItemsAlreadyExists }}>
            {children}
        </CartContext.Provider>
    )
}