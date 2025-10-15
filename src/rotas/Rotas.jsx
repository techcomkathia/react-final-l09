import {Routes, Route} from "react-router-dom";

import Home from "../paginas/Home";
import DetalheProduto from "../paginas/DetalheProduto";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";
import TodosProdutos from "../paginas/TodosProdutos";
import CarrinhoCompras from "../paginas/CarrinhoCompras";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<TodosProdutos />} />
            <Route path="/produtos/:id" element={<DetalheProduto />} />
            <Route path="/carrinho" element={<CarrinhoCompras />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}