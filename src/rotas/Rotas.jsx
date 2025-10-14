import {Routes, Route} from "react-router-dom";

import Home from "../paginas/Home";
import DetalheProduto from "../paginas/DetalheProduto";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos/:id" element={<DetalheProduto />} />
        </Routes>
    );
}