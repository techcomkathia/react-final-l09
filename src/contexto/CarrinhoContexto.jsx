import { createContext } from "react";
import { useState } from "react";

export const CarrinhoContexto = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContexto.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContexto.Provider>
    );
}