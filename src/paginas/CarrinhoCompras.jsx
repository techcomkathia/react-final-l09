import { CarrinhoContexto } from "../contexto/CarrinhoContexto";
import { useContext } from "react";


export default function CarrinhoCompras() {
    const { carrinho } = useContext(CarrinhoContexto);
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <div>
                {carrinho.map((produto) => {
                    return (
                        <div key={produto.id}>
                            <h3>{produto.titulo}</h3>
                            <p>{produto.preco}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}