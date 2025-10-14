import {useState, createContext} from "react";

import { produtos } from "./infoProdutos";

export const ProdutosContext = createContext();

export function ProdutosProvider({children}) {
    const [listaProdutos, setListaProdutos] = useState(produtos);

    return (
        <ProdutosContext.Provider value={{listaProdutos, setListaProdutos}}>
            {children}
        </ProdutosContext.Provider>
    );
}


/