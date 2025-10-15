import { useParams } from "react-router-dom"; //para
import { useContext } from "react"; 
// acessar os parâmetros da rota :id

import { ProdutosContext } from "../contexto/ProdutosContext";
import { CarrinhoContexto } from "../contexto/CarrinhoContexto";
import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

export default function DetalheProduto() {
    const { id } = useParams();
    const { listaProdutos } = useContext(ProdutosContext);
    const { carrinho, setCarrinho } = useContext(CarrinhoContexto);
    const [produto, setProduto] = useState({});
    
    useEffect(()=>{
        const produtoEncontrado = listaProdutos.find(produto => produto.id == id);        
        setProduto(produtoEncontrado);
    }, [])

    function adicionarAoCarrinho(produto){
        setCarrinho([...carrinho, produto]);
        alert(`O produto ${produto.titulo} foi adicionado ao carrinho`);
    }
    
    // if(!produto){
    //     return <h2>Produto nao encontrado</h2>
    // }
    // else{
    //     return (
    //         <div key={produto.id}>
    //             <h2>Detalhes do produto</h2>
    //             <img src={produto.imagem} alt={produto.titulo} />
    //             <p>{produto.titulo}</p>
    //             <p>{produto.preco}</p>
    //             <p>{produto.descricao}</p>
    //             <Button variant="primary" onClick={()=>adicionarAoCarrinho(produto)}>Adicionar ao carrinho</Button>
    //         </div>
    //     );
    // }

    return (
        <div>
            <h2>Detalhes do produto</h2>

           { !produto ? <h2> Produto nao encontrado </h2> : (
                <div key={produto.id}>
                    <img src={produto.imagem} alt={produto.titulo} />
                    <p>{produto.titulo}</p>
                    <p>{produto.preco}</p>
                    <p>{produto.descricao}</p>
                    <Button variant="primary" onClick={()=>adicionarAoCarrinho(produto)}>Adicionar ao carrinho</Button>
                </div>
           )}
         
           
        </div>
    );
}

//utilize os parâmetros da rota para exibir os detalhes do produto
//para o path "/produtos/:id" exiba a página de detalhes do produto
//use o useContext para obter a lista de produtos
//filtre a lista para encontrar o produto com o id correspondente