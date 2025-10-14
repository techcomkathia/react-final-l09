import {useState, createContext} from "react";

export const ProdutosContext = createContext();

export function ProdutosProvider({children}) {
    const [produtos, setProdutos] = useState([]);

    return (
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
            {children}
        </ProdutosContext.Provider>
    );
}