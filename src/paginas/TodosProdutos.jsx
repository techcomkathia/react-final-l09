import { useContext } from "react";
import { ProdutosContext } from "../contexto/ProdutosContext";
import { DivContainer } from "../componentes/DivContainer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

// no arquivo TodosProdutos.jsx, use o contexto para exibir os produtos
//use o hook useContext para obter a lista de produtos
//use a renderização por lista para exibir os produtos na tela

//https://react-bootstrap.netlify.app/docs/components/cards


export default function TodosProdutos() {
    const { listaProdutos } = useContext(ProdutosContext);
    return (
        <div>
            <h2>Todos os produtos</h2>
            <DivContainer>
                {listaProdutos.map((produto)=>{
                    return(
                        <Card style={{ width: '18rem' }}>
                            <Link to={`/produtos/${produto.id}`}>
                                <Card.Img variant="top" src={produto.imagem} alt="" width='200'/>  
                            </Link>
                        
                        <Card.Body>
                            <Card.Title>{produto.titulo}</Card.Title>
                            <Card.Text>
                            {produto.preco}
                            </Card.Text>
                            <Button variant="primary">Adicionar ao carrinho</Button>
                        </Card.Body>
                        </Card>
                    )
                })}
            </DivContainer>
        </div>
    );
}